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
lt.plugins.watches_watcher.watch_ui = (function watch_ui(watches){var e__8113__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.watchlist","ul.watchlist",1704835784),cljs.core.map.call(null,(function (watch){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),"padding-bottom: 3px;"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.location","p.location",841745125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket3","span.cm-bracket3",4191730012),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ed-info","ed-info",3365173390).cljs$core$IFn$_invoke$arity$1(watch))),cljs.core.str(":"),cljs.core.str(new cljs.core.Keyword(null,"line-no","line-no",1190757804).cljs$core$IFn$_invoke$arity$1(watch))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text","span.text",4620056771),new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(watch)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-result.open.result-mark.full","span.inline-result.open.result-mark.full",1407912181),crate.core.raw.call(null,new cljs.core.Keyword(null,"last-result","last-result",1581948582).cljs$core$IFn$_invoke$arity$1(watch))], null)], null);
}),watches)], null));var seq__8289_8307 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8290_8308 = null;var count__8291_8309 = 0;var i__8292_8310 = 0;while(true){
if((i__8292_8310 < count__8291_8309))
{var vec__8293_8311 = cljs.core._nth.call(null,chunk__8290_8308,i__8292_8310);var ev__8114__auto___8312 = cljs.core.nth.call(null,vec__8293_8311,0,null);var func__8115__auto___8313 = cljs.core.nth.call(null,vec__8293_8311,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8312,func__8115__auto___8313);
{
var G__8314 = seq__8289_8307;
var G__8315 = chunk__8290_8308;
var G__8316 = count__8291_8309;
var G__8317 = (i__8292_8310 + 1);
seq__8289_8307 = G__8314;
chunk__8290_8308 = G__8315;
count__8291_8309 = G__8316;
i__8292_8310 = G__8317;
continue;
}
} else
{var temp__4092__auto___8318 = cljs.core.seq.call(null,seq__8289_8307);if(temp__4092__auto___8318)
{var seq__8289_8319__$1 = temp__4092__auto___8318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8289_8319__$1))
{var c__7499__auto___8320 = cljs.core.chunk_first.call(null,seq__8289_8319__$1);{
var G__8321 = cljs.core.chunk_rest.call(null,seq__8289_8319__$1);
var G__8322 = c__7499__auto___8320;
var G__8323 = cljs.core.count.call(null,c__7499__auto___8320);
var G__8324 = 0;
seq__8289_8307 = G__8321;
chunk__8290_8308 = G__8322;
count__8291_8309 = G__8323;
i__8292_8310 = G__8324;
continue;
}
} else
{var vec__8294_8325 = cljs.core.first.call(null,seq__8289_8319__$1);var ev__8114__auto___8326 = cljs.core.nth.call(null,vec__8294_8325,0,null);var func__8115__auto___8327 = cljs.core.nth.call(null,vec__8294_8325,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8326,func__8115__auto___8327);
{
var G__8328 = cljs.core.next.call(null,seq__8289_8319__$1);
var G__8329 = null;
var G__8330 = 0;
var G__8331 = 0;
seq__8289_8307 = G__8328;
chunk__8290_8308 = G__8329;
count__8291_8309 = G__8330;
i__8292_8310 = G__8331;
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
lt.plugins.watches_watcher.watchlist = (function watchlist(watches){var e__8113__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.watchlist.CodeMirror.cm-s-default","div.watchlist.CodeMirror.cm-s-default",2401082394),lt.plugins.watches_watcher.watch_ui.call(null,watches)], null));var seq__8301_8332 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8302_8333 = null;var count__8303_8334 = 0;var i__8304_8335 = 0;while(true){
if((i__8304_8335 < count__8303_8334))
{var vec__8305_8336 = cljs.core._nth.call(null,chunk__8302_8333,i__8304_8335);var ev__8114__auto___8337 = cljs.core.nth.call(null,vec__8305_8336,0,null);var func__8115__auto___8338 = cljs.core.nth.call(null,vec__8305_8336,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8337,func__8115__auto___8338);
{
var G__8339 = seq__8301_8332;
var G__8340 = chunk__8302_8333;
var G__8341 = count__8303_8334;
var G__8342 = (i__8304_8335 + 1);
seq__8301_8332 = G__8339;
chunk__8302_8333 = G__8340;
count__8303_8334 = G__8341;
i__8304_8335 = G__8342;
continue;
}
} else
{var temp__4092__auto___8343 = cljs.core.seq.call(null,seq__8301_8332);if(temp__4092__auto___8343)
{var seq__8301_8344__$1 = temp__4092__auto___8343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8301_8344__$1))
{var c__7499__auto___8345 = cljs.core.chunk_first.call(null,seq__8301_8344__$1);{
var G__8346 = cljs.core.chunk_rest.call(null,seq__8301_8344__$1);
var G__8347 = c__7499__auto___8345;
var G__8348 = cljs.core.count.call(null,c__7499__auto___8345);
var G__8349 = 0;
seq__8301_8332 = G__8346;
chunk__8302_8333 = G__8347;
count__8303_8334 = G__8348;
i__8304_8335 = G__8349;
continue;
}
} else
{var vec__8306_8350 = cljs.core.first.call(null,seq__8301_8344__$1);var ev__8114__auto___8351 = cljs.core.nth.call(null,vec__8306_8350,0,null);var func__8115__auto___8352 = cljs.core.nth.call(null,vec__8306_8350,1,null);lt.util.dom.on.call(null,e__8113__auto__,ev__8114__auto___8351,func__8115__auto___8352);
{
var G__8353 = cljs.core.next.call(null,seq__8301_8344__$1);
var G__8354 = null;
var G__8355 = 0;
var G__8356 = 0;
seq__8301_8332 = G__8353;
chunk__8302_8333 = G__8354;
count__8303_8334 = G__8355;
i__8304_8335 = G__8356;
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
lt.plugins.watches_watcher.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8357 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8357))
{var ts_8358 = temp__4092__auto___8357;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8358))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8358);
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