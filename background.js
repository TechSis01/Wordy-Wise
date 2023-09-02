let contextMenuItem = {
    "id":"wordyWise",
    "title":"Wordy Wise",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem)


    // const [tab] = chrome.tabs.query({active: true, lastFocusedWindow: true});
    // chrome.tabs.sendMessage(tab.id, {search:true});


chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "wordyWise" && clickData.selectionText){
        console.log(clickData.selectionText)
        chrome.storage.sync.set({"word":clickData.selectionText})
        
    }
})