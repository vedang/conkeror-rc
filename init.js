// Open Right-Clicked Links in New Buffers
require ("clicks-in-new-buffer.js");
clicks_in_new_buffer_target = OPEN_NEW_BUFFER_BACKGROUND;
clicks_in_new_buffer_button = 2;

// follow link in new buffer
define_key(content_buffer_normal_keymap, "d", "follow-new-buffer");
