// Switch to recent buffer
minibuffer.prototype.read_recent_buffer = function () {
        var window = this.window;
        var buffer = this.window.buffers.current;
        keywords(arguments, $prompt = "Buffer:",
                 $default = buffer,
                 $history = "buffer");
        var buffers = window.buffers.buffer_list.slice(0);
        buffers.push(buffers.shift());
        var completer = all_word_completer(
                $completions = buffers,
                $get_string = function (x) x.title, 
                $get_description = function (x) x.description);
        var result = yield this.read(
                $keymap = read_buffer_keymap,
                $prompt = arguments.$prompt,
                $history = arguments.$history,
                $completer = completer,
                $match_required = true,
                $auto_complete = "buffer",
                $auto_complete_initial = true,
                $auto_complete_delay = 0,
                $default_completion = arguments.$default);
        yield co_return(result);
};

interactive("switch-to-recent-buffer",
            "Switch to a buffer specified in the minibuffer.  List of buffers "+
            "will be ordered by recency.",
            function (I) {
                    switch_to_buffer(
                            I.window,
                            (yield I.minibuffer.read_recent_buffer(
                                    $prompt = "Switch to buffer:",
                                    $default = (I.window.buffers.count > 1 ?
                                                I.window.buffers.buffer_list[1] :
                                                I.buffer))));
            });

define_key(default_global_keymap, "C-x B", "switch-to-recent-buffer");
