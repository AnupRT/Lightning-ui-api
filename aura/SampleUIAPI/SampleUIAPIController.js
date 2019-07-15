({
	handleLoad : function(component, event, helper) {
        let response = event.getParams();
        console.log('record-ui response---->',JSON.parse(JSON.stringify(response)));
	}
})