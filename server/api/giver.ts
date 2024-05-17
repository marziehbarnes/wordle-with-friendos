export default defineEventHandler((event) => {
    // console.log("hello world event")
    /*
    The handler can directly return JSON data, a Promise, or use event.node.res.end() to send a response
    */
    return { 
      hello: 'world'
    }
  })
// export default defineEventHandler(() => 'Hello World!')