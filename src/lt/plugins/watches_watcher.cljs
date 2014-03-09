(ns lt.plugins.watches-watcher
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.util.dom :as dom]
            [crate.core :as crate]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui watch-ui [watches]
  [:ul.watchlist (map (fn [watch]
                        [:li
                         {:style "padding-bottom: 3px;"}
                         [:p.location [:span.cm-bracket3 (str (:name (:ed-info watch)) ":" (:line-no watch))]]
                         [:span.text (:text watch)]
                         [:span.inline-result.open.result-mark.full (crate/raw (:last-result watch))]])
                      watches)])

(defui watchlist [watches]
  [:div.watchlist.CodeMirror.cm-s-default (watch-ui watches)])

(defn watch-info [watch]
  {:text (:selected watch)
   :last-result (:last-result watch)
   :ed-info (:info @(:ed watch))
   :line-no (:line (:loc watch))})

(defn current-watches! []
  (->> (object/by-tag :inline.watch)
       (map deref)
       (map watch-info)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(object/object* ::watches-watcher
                :behaviors [::on-close-destroy]
                :tags #{:update-wrapper}
                :name "Watches watcher"
                :init (fn [this] (watchlist (current-watches!))))

(def watcher (object/create ::watches-watcher))

(cmd/command {:command ::show-watcher
              :desc "Watches watcher: Show watcher"
              :exec (fn []
                      (tabs/add-or-focus! watcher))})

(behavior ::update-watcher
          :triggers #{:update!}
          :reaction (fn [this res]
                      (object/merge! this {:last-result res})
                      (let [new-ui (watch-ui (current-watches!))]
                        (dom/replace-with (dom/$ :ul (object/->content watcher)) new-ui)
                        :done)))

(behavior ::remember-selection-on-watch-creation
          :triggers #{:object.instant}
          :reaction (fn [watch]
                      (object/merge! watch {:selected
                                            (.getSelection (.-doc (:mark @watch)))})))

