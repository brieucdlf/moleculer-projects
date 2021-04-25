module.exports = {
    name: "helper",

    actions: {
    
        random() {
            return Math.round(Math.random() * 10)
        }

    },

    events: {
        "hello.called"(payload) {
            this.logger.info("helper Service Caught and Event")
            this.logger.info(payload)
        }
    }
}
