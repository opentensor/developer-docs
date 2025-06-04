(function() {
    var implementors = Object.fromEntries([["finality_grandpa",[]],["sc_consensus_grandpa",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[23,28]}