if(!lt.util.load.provided_QMARK_('lt.plugins.watches-watcher')) {
goog.provide('lt.plugins.watches_watcher');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.objs.command');
lt.plugins.watches_watcher.watch_ui = (function watch_ui(watches){var e__8113__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.watchlist","ul.watchlist",1704835784),cljs.core.map.call(null,(function (watch){console.log(new cljs.core.Keyword(null,"last-result","last-result",1581948582).cljs$core$IFn$_invoke$arity$1(watch));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.location","p.location",841745125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket3","span.cm-bracket3",4191730012),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ed-info","ed-info",3365173390).cljs$core$IFn$_invoke$arity$1(watch))),cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"line-no","line-no",1190757804).cljs$core$IFn$_invoke$arity$1(watch))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",4620056771),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(watch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-result.open.result-mark.full","span.inline-result.open.result-mark.full",1407912181),crate.core.raw.call(null,new cljs.core.Keyword(null,"last-result","last-result",1581948582).cljs$core$IFn$_invoke$arity$1(watch))], null)], null)], null);
}),watches)], null));var seq__8833_8851 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8834_8852 = null;var count__8835_8853 = 0;var i__8836_8854 = 0;while(true){
if((i__8836_8854 < count__8835_8853))
{var vec__8837_8855 = cljs.core._nth.call(null,chunk__8834_8852,i__8836_8854);var ev__8114__auto___8856 = cljs.core.nth.call(null,vec__8837_8855,0,null);var func__8115__auto___8857 = cljs.core.nth.call(null,vec__8837_8855,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8856,func__8115__auto___8857);
{
var G__8858 = seq__8833_8851;
var G__8859 = chunk__8834_8852;
var G__8860 = count__8835_8853;
var G__8861 = (i__8836_8854 + 1);
seq__8833_8851 = G__8858;
chunk__8834_8852 = G__8859;
count__8835_8853 = G__8860;
i__8836_8854 = G__8861;
continue;
}
} else
{var temp__4092__auto___8862 = cljs.core.seq.call(null,seq__8833_8851);if(temp__4092__auto___8862)
{var seq__8833_8863__$1 = temp__4092__auto___8862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8833_8863__$1))
{var c__7499__auto___8864 = cljs.core.chunk_first.call(null,seq__8833_8863__$1);{
var G__8865 = cljs.core.chunk_rest.call(null,seq__8833_8863__$1);
var G__8866 = c__7499__auto___8864;
var G__8867 = cljs.core.count.call(null,c__7499__auto___8864);
var G__8868 = 0;
seq__8833_8851 = G__8865;
chunk__8834_8852 = G__8866;
count__8835_8853 = G__8867;
i__8836_8854 = G__8868;
continue;
}
} else
{var vec__8838_8869 = cljs.core.first.call(null,seq__8833_8863__$1);var ev__8114__auto___8870 = cljs.core.nth.call(null,vec__8838_8869,0,null);var func__8115__auto___8871 = cljs.core.nth.call(null,vec__8838_8869,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8870,func__8115__auto___8871);
{
var G__8872 = cljs.core.next.call(null,seq__8833_8863__$1);
var G__8873 = null;
var G__8874 = 0;
var G__8875 = 0;
seq__8833_8851 = G__8872;
chunk__8834_8852 = G__8873;
count__8835_8853 = G__8874;
i__8836_8854 = G__8875;
continue;
}
}
} else
{}
}
break;
}
return e__8113__auto__;
});
lt.plugins.watches_watcher.watchlist = (function watchlist(watches){var e__8113__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.watchlist.CodeMirror.cm-s-default","div.watchlist.CodeMirror.cm-s-default",2401082394),lt.plugins.watches_watcher.watch_ui.call(null,watches)], null));var seq__8845_8876 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8846_8877 = null;var count__8847_8878 = 0;var i__8848_8879 = 0;while(true){
if((i__8848_8879 < count__8847_8878))
{var vec__8849_8880 = cljs.core._nth.call(null,chunk__8846_8877,i__8848_8879);var ev__8114__auto___8881 = cljs.core.nth.call(null,vec__8849_8880,0,null);var func__8115__auto___8882 = cljs.core.nth.call(null,vec__8849_8880,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8881,func__8115__auto___8882);
{
var G__8883 = seq__8845_8876;
var G__8884 = chunk__8846_8877;
var G__8885 = count__8847_8878;
var G__8886 = (i__8848_8879 + 1);
seq__8845_8876 = G__8883;
chunk__8846_8877 = G__8884;
count__8847_8878 = G__8885;
i__8848_8879 = G__8886;
continue;
}
} else
{var temp__4092__auto___8887 = cljs.core.seq.call(null,seq__8845_8876);if(temp__4092__auto___8887)
{var seq__8845_8888__$1 = temp__4092__auto___8887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8845_8888__$1))
{var c__7499__auto___8889 = cljs.core.chunk_first.call(null,seq__8845_8888__$1);{
var G__8890 = cljs.core.chunk_rest.call(null,seq__8845_8888__$1);
var G__8891 = c__7499__auto___8889;
var G__8892 = cljs.core.count.call(null,c__7499__auto___8889);
var G__8893 = 0;
seq__8845_8876 = G__8890;
chunk__8846_8877 = G__8891;
count__8847_8878 = G__8892;
i__8848_8879 = G__8893;
continue;
}
} else
{var vec__8850_8894 = cljs.core.first.call(null,seq__8845_8888__$1);var ev__8114__auto___8895 = cljs.core.nth.call(null,vec__8850_8894,0,null);var func__8115__auto___8896 = cljs.core.nth.call(null,vec__8850_8894,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8895,func__8115__auto___8896);
{
var G__8897 = cljs.core.next.call(null,seq__8845_8888__$1);
var G__8898 = null;
var G__8899 = 0;
var G__8900 = 0;
seq__8845_8876 = G__8897;
chunk__8846_8877 = G__8898;
count__8847_8878 = G__8899;
i__8848_8879 = G__8900;
continue;
}
}
} else
{}
}
break;
}
return e__8113__auto__;
});
lt.plugins.watches_watcher.watch_info = (function watch_info(watch){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"last-result","last-result",1581948582),new cljs.core.Keyword(null,"last-result","last-result",1581948582).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"ed-info","ed-info",3365173390),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(watch))),new cljs.core.Keyword(null,"line-no","line-no",1190757804),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(watch))], null);
});
lt.plugins.watches_watcher.current_watches_BANG_ = (function current_watches_BANG_(){return cljs.core.map.call(null,lt.plugins.watches_watcher.watch_info,cljs.core.map.call(null,cljs.core.deref,lt.object.by_tag.call(null,new cljs.core.Keyword(null,"inline.watch","inline.watch",4637733036))));
});
lt.plugins.watches_watcher.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8901 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8901))
{var ts_8902 = temp__4092__auto___8901;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8902))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8902);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.watches-watcher","on-close-destroy","lt.plugins.watches-watcher/on-close-destroy",811644687),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.watches_watcher.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.watches-watcher","watches-watcher","lt.plugins.watches-watcher/watches-watcher",2409892628),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.watches-watcher","on-close-destroy","lt.plugins.watches-watcher/on-close-destroy",811644687)], null),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-wrapper","update-wrapper",4531993345),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Watches watcher",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.watches_watcher.watchlist.call(null,lt.plugins.watches_watcher.current_watches_BANG_.call(null));
}));
lt.plugins.watches_watcher.watcher = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.watches-watcher","watches-watcher","lt.plugins.watches-watcher/watches-watcher",2409892628));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.watches-watcher","show-watcher","lt.plugins.watches-watcher/show-watcher",1728072660),new cljs.core.Keyword(null,"desc","desc",1016984067),"Watches watcher: Show watcher",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.watches_watcher.watcher);
})], null));
lt.plugins.watches_watcher.__BEH__update_watcher = (function __BEH__update_watcher(this$,res){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-result","last-result",1581948582),res], null));
var new_ui = lt.plugins.watches_watcher.watch_ui.call(null,lt.plugins.watches_watcher.current_watches_BANG_.call(null));lt.util.dom.replace_with.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"ul","ul",1013907977),lt.object.__GT_content.call(null,lt.plugins.watches_watcher.watcher)),new_ui);
return new cljs.core.Keyword(null,"done","done",1016993524);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.watches-watcher","update-watcher","lt.plugins.watches-watcher/update-watcher",3210321424),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.watches_watcher.__BEH__update_watcher,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null));
lt.plugins.watches_watcher.__BEH__remember_selection_on_watch_creation = (function __BEH__remember_selection_on_watch_creation(watch){return lt.object.merge_BANG_.call(null,watch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),new cljs.core.Keyword(null,"mark","mark",1017248319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,watch)).doc.getSelection()], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.watches-watcher","remember-selection-on-watch-creation","lt.plugins.watches-watcher/remember-selection-on-watch-creation",3406094386),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.watches_watcher.__BEH__remember_selection_on_watch_creation,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}

//# sourceMappingURL=watches-watcher_compiled.js.map