let isWappDisplayed = false
let wappIframeExists = false
const maxOpacity = 10
const minOpacity = 0
let windowOpacity = maxOpacity
let wappIframe = document.createElement("IFRAME")
wappIframe.setAttribute("id", "whatsapp-window")
wappIframe.setAttribute("src", "https://web.whatsapp.com")

function switchDisplayMode(e) {
	if (!!e.ctrlKey && !!e.altKey && e.key === 'a') 
	{
		e.preventDefault()
		isWappDisplayed = !isWappDisplayed
		
		if (!wappIframeExists) 
		{
			wappIframeExists = true
		
			document.body.insertBefore(wappIframe, document.body.firstChild)
		
			document.getElementById("whatsapp-window").width = "500"
			document.getElementById("whatsapp-window").height = "300"
			document.getElementById("whatsapp-window").style.resize = "both"
			document.getElementById("whatsapp-window").style.opacity = "1.0"
		}
		
		if (isWappDisplayed) document.getElementById("whatsapp-window").style.display = "block";
		else if (!isWappDisplayed) document.getElementById("whatsapp-window").style.display = "none";
	}
	
	if (!!e.ctrlKey && !!e.altKey && (e.key === 's' || e.key === 'd'))
	{
		if (e.key === 's' && windowOpacity > minOpacity) windowOpacity--
		else if (e.key === 'd' && windowOpacity < maxOpacity) windowOpacity++
		
		document.getElementById("whatsapp-window").style.opacity = (windowOpacity/10).toFixed(1);
		console.log((windowOpacity/10).toFixed(1))
	}
}

document.onkeydown = switchDisplayMode;
