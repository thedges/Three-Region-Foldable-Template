({
	doInit : function(component, event, helper) {
        helper.isConsoleNavigation(component, event);
        helper.isSubtab(component, event, helper);
    },
    
    handleOpenClose : function(component, event, helper){
        console.log('handleOpenClose: START');
        
        console.log('handleOpenClose: event.getSource()',event.getSource());
        var selectedSection = event.getSource().getLocalId();
        console.log('handleOpenClose: selectedSection',selectedSection);
        
        var newState = !component.get('v.' + selectedSection);
        console.log('handleOpenClose: newState',newState);
        component.set('v.' + selectedSection, newState);
       
        console.log('handleOpenClose: END');
	}
})