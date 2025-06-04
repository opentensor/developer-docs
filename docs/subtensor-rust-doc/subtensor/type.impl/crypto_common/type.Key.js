(function() {
    var type_impls = Object.fromEntries([["ghash",[]],["poly1305",[]],["polyval",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[12,16,15]}