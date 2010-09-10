interactive("find-url-from-history",
            "Open a URL in the current buffer",
            function (I) {
                    var target = I.browse_target("find-url");
                    open_in_browser(I.buffer, target,
                                    (yield I.minibuffer.read_url($prompt =
                                                                 browse_target_prompt(target), $use_webjumps = false, $use_history =
                                                                 true, $use_bookmarks = false)));
            });


function eval_expression (I) {
        var result = eval((yield I.minibuffer.read(
                $prompt = "Eval:",
                $history = "eval-expression",
                $completer = javascript_completer(I.buffer))));
        if (result !== undefined)
                I.window.minibuffer.message(String(result));
}
function eval_expression_in_content (I) {
        var expr = yield I.minibuffer.read(
                $prompt = "Eval in content:",
                $history = "eval-expression",
                $completer = javascript_completer(I.buffer));
        expr = expr.replace(/\\/g, "\\\\")
                .replace(/'/g, "\\'");
        var s = Components.utils.Sandbox(I.buffer.top_frame);
        s.window = I.buffer.top_frame.wrappedJSObject;
        s.document = I.buffer.document.wrappedJSObject;
        s.dumpln = dumpln;
        var res = Components.utils.evalInSandbox(
                "(function () { return eval('"+expr+"'); })();", s);
        if (res !== undefined)
                I.window.minibuffer.message(String(res));
}
interactive("eval-expression",
            "Evaluate JavaScript statements.",
            alternates(eval_expression, eval_expression_in_content));


interactive("toggle-stylesheets",
            "Toggle whether conkeror uses style sheets (CSS) for the " +
            "current buffer.  It is sometimes useful to turn off style " +
            "sheets when the web site makes obnoxious choices.",
            function(I) {
                    var s = I.buffer.document.styleSheets;
                    for (var i = 0; i < s.length; i++)
                            s[i].disabled = !s[i].disabled;
            });
