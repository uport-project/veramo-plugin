var e={components:{schemas:{IMyAgentPluginFooArgs:{type:"object",properties:{did:{type:"string",description:"Decentralized identifier"},bar:{type:"string",description:"bar"}}}},methods:{myPluginFoo:{description:"Does foo",arguments:{$ref:"#/components/schemas/IMyAgentPluginFooArgs"},returnType:{type:"string"}}}}};exports.MyAgentPlugin=function(){function t(){this.schema=e,this.methods={myPluginFoo:this.myPluginFoo.bind(this)}}return t.prototype.myPluginFoo=function(e,t){try{return Promise.resolve(t.agent.resolveDid({didUrl:e.did})).then(function(t){return console.log(t),e.bar})}catch(e){return Promise.reject(e)}},t}();
//# sourceMappingURL=index.js.map
