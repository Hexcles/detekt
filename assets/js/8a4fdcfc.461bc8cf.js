"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9440],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?o.createElement(k,i(i({ref:n},u),{},{components:t})):o.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5754:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=t(3117),l=t(102),a=(t(7294),t(3905)),i=["components"],r={title:"Coroutines Rule Set",sidebar:"home_sidebar",keywords:["rules","coroutines"],permalink:"coroutines.html",toc:!0,folder:"documentation"},p=void 0,s={unversionedId:"rules/coroutines",id:"version-1.23.0/rules/coroutines",title:"Coroutines Rule Set",description:"The coroutines rule set analyzes code for potential coroutines problems.",source:"@site/versioned_docs/version-1.23.0/rules/coroutines.md",sourceDirName:"rules",slug:"/rules/coroutines",permalink:"/docs/rules/coroutines",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.0/rules/coroutines.md",tags:[],version:"1.23.0",frontMatter:{title:"Coroutines Rule Set",sidebar:"home_sidebar",keywords:["rules","coroutines"],permalink:"coroutines.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Complexity Rule Set",permalink:"/docs/rules/complexity"},next:{title:"Empty-blocks Rule Set",permalink:"/docs/rules/empty-blocks"}},u={},c=[{value:"GlobalCoroutineUsage",id:"globalcoroutineusage",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"InjectDispatcher",id:"injectdispatcher",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"RedundantSuspendModifier",id:"redundantsuspendmodifier",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"SleepInsteadOfDelay",id:"sleepinsteadofdelay",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"SuspendFunSwallowedCancellation",id:"suspendfunswallowedcancellation",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"SuspendFunWithCoroutineScopeReceiver",id:"suspendfunwithcoroutinescopereceiver",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4},{value:"SuspendFunWithFlowReturnType",id:"suspendfunwithflowreturntype",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-6",level:4},{value:"Compliant Code:",id:"compliant-code-6",level:4}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The coroutines rule set analyzes code for potential coroutines problems."),(0,a.kt)("h3",{id:"globalcoroutineusage"},"GlobalCoroutineUsage"),(0,a.kt)("p",null,"Report usages of ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalScope.launch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalScope.async"),". It is highly discouraged by the Kotlin documentation:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Global scope is used to launch top-level coroutines which are operating on the whole application lifetime and are\nnot cancelled prematurely.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Application code usually should use an application-defined CoroutineScope. Using async or launch on the instance\nof GlobalScope is highly discouraged.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/"},"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,a.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun foo() {\n    GlobalScope.launch { delay(1_000L) }\n}\n")),(0,a.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val scope = CoroutineScope(Dispatchers.Default)\n\nfun foo() {\n    scope.launch { delay(1_000L) }\n}\n\nfun onDestroy() {\n    scope.cancel()\n}\n")),(0,a.kt)("h3",{id:"injectdispatcher"},"InjectDispatcher"),(0,a.kt)("p",null,"Always use dependency injection to inject dispatchers for easier testing.\nThis rule is based on the recommendation\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers"},"https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,a.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dispatcherNames")," (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"['IO', 'Default', 'Unconfined']"),")"),(0,a.kt)("p",{parentName:"li"},"The names of dispatchers to detect by this rule"))),(0,a.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun myFunc() {\ncoroutineScope(Dispatchers.IO)\n}\n")),(0,a.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun myFunc(dispatcher: CoroutineDispatcher = Dispatchers.IO) {\ncoroutineScope(dispatcher)\n}\n\nclass MyRepository(dispatchers: CoroutineDispatcher = Dispatchers.IO)\n")),(0,a.kt)("h3",{id:"redundantsuspendmodifier"},"RedundantSuspendModifier"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," modifier should only be used where needed, otherwise the function can only be used from other suspending\nfunctions. This needlessly restricts use of the function and should be avoided by removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," modifier\nwhere it's not needed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,a.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'suspend fun normalFunction() {\n    println("string")\n}\n')),(0,a.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun normalFunction() {\n    println("string")\n}\n')),(0,a.kt)("h3",{id:"sleepinsteadofdelay"},"SleepInsteadOfDelay"),(0,a.kt)("p",null,"Report usages of ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.sleep")," in suspending functions and coroutine blocks. A thread can\ncontain multiple coroutines at one time due to coroutines' lightweight nature, so if one\ncoroutine invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.sleep"),", it could potentially halt the execution of unrelated coroutines\nand cause unpredictable behavior."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,a.kt)("h4",{id:"noncompliant-code-3"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun foo() {\n    Thread.sleep(1_000L)\n}\n")),(0,a.kt)("h4",{id:"compliant-code-3"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun foo() {\n    delay(1_000L)\n}\n")),(0,a.kt)("h3",{id:"suspendfunswallowedcancellation"},"SuspendFunSwallowedCancellation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," functions should not be called inside ",(0,a.kt)("inlineCode",{parentName:"p"},"runCatching"),"'s lambda block, because ",(0,a.kt)("inlineCode",{parentName:"p"},"runCatching")," catches all the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Exception"),"s. For Coroutines to work in all cases, developers should make sure to propagate ",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationException"),"\nexceptions. This means ",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationException")," should never be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"caught and swallowed (even if logged)"),(0,a.kt)("li",{parentName:"ul"},"caught and propagated to external systems"),(0,a.kt)("li",{parentName:"ul"},"caught and shown to the user")),(0,a.kt)("p",null,"they must always be rethrown in the same context."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"runCatching")," increases this risk of mis-handling cancellation. If you catch and don't rethrow all the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationException"),", your coroutines are not cancelled even if you cancel their ",(0,a.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),"."),(0,a.kt)("p",null,"This can very easily lead to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"unexpected crashes"),(0,a.kt)("li",{parentName:"ul"},"extremely hard to diagnose bugs"),(0,a.kt)("li",{parentName:"ul"},"memory leaks"),(0,a.kt)("li",{parentName:"ul"},"performance issues"),(0,a.kt)("li",{parentName:"ul"},"battery drain")),(0,a.kt)("p",null,"See reference, ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative"},"Kotlin doc"),"."),(0,a.kt)("p",null,"If your project wants to use ",(0,a.kt)("inlineCode",{parentName:"p"},"runCatching")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," objects, it is recommended to write a ",(0,a.kt)("inlineCode",{parentName:"p"},"coRunCatching"),"\nutility function which immediately re-throws ",(0,a.kt)("inlineCode",{parentName:"p"},"CancellationException"),"; and forbid ",(0,a.kt)("inlineCode",{parentName:"p"},"runCatching")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),"\ncombinations by activating this rule."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,a.kt)("h4",{id:"noncompliant-code-4"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Throws(IllegalStateException::class)\nsuspend fun bar(delay: Long) {\n    check(delay <= 1_000L)\n    delay(delay)\n}\n\nsuspend fun foo() {\n    runCatching {\n        bar(1_000L)\n    }\n}\n")),(0,a.kt)("h4",{id:"compliant-code-4"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Throws(IllegalStateException::class)\nsuspend fun bar(delay: Long) {\n    check(delay <= 1_000L)\n    delay(delay)\n}\n\nsuspend fun foo() {\n    try {\n        bar(1_000L)\n    } catch (e: IllegalStateException) {\n        // handle error\n    }\n}\n\n// Alternate\n@Throws(IllegalStateException::class)\nsuspend fun foo() {\n    bar(1_000L)\n}\n")),(0,a.kt)("h3",{id:"suspendfunwithcoroutinescopereceiver"},"SuspendFunWithCoroutineScopeReceiver"),(0,a.kt)("p",null,"Suspend functions that use ",(0,a.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," as receiver should not be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," provides structured concurrency via its ",(0,a.kt)("inlineCode",{parentName:"p"},"coroutineContext"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),"\nfunction also has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"coroutineContext"),", which is now ambiguous and mixed with the\nreceiver`s."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-basics.html#scope-builder-and-concurrency"},"https://kotlinlang.org/docs/coroutines-basics.html#scope-builder-and-concurrency")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Aliases"),": SuspendFunctionOnCoroutineScope"),(0,a.kt)("h4",{id:"noncompliant-code-5"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun CoroutineScope.foo() {\n    launch {\n      delay(1.seconds)\n    }\n}\n")),(0,a.kt)("h4",{id:"compliant-code-5"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun CoroutineScope.foo() {\n    launch {\n      delay(1.seconds)\n    }\n}\n\n// Alternative\nsuspend fun foo() = coroutineScope {\n    launch {\n      delay(1.seconds)\n    }\n}\n")),(0,a.kt)("h3",{id:"suspendfunwithflowreturntype"},"SuspendFunWithFlowReturnType"),(0,a.kt)("p",null,"Functions that return ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"kotlinx.coroutines.flow")," should not be marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," are intended to be cold observable streams. The act of simply invoking a function that\nreturns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),", should not have any side effects. Only once collection begins against the\nreturned ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow"),", should work actually be done."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/flow.html#flows-are-cold"},"https://kotlinlang.org/docs/flow.html#flows-are-cold")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.21.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,a.kt)("h4",{id:"noncompliant-code-6"},"Noncompliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun observeSignals(): Flow<Unit> {\n    val pollingInterval = getPollingInterval() // Done outside of the flow builder block.\n    return flow {\n        while (true) {\n            delay(pollingInterval)\n            emit(Unit)\n        }\n    }\n}\n\nprivate suspend fun getPollingInterval(): Long {\n    // Return the polling interval from some repository\n    // in a suspending manner.\n}\n")),(0,a.kt)("h4",{id:"compliant-code-6"},"Compliant Code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun observeSignals(): Flow<Unit> {\n    return flow {\n        val pollingInterval = getPollingInterval() // Moved into the flow builder block.\n        while (true) {\n            delay(pollingInterval)\n            emit(Unit)\n        }\n    }\n}\n\nprivate suspend fun getPollingInterval(): Long {\n    // Return the polling interval from some repository\n    // in a suspending manner.\n}\n")))}m.isMDXComponent=!0}}]);