let isWappDisplayed = false
let wappIframeExists = false
const maxOpacity = 10
const minOpacity = 0
let windowOpacity = 9
let iframeContainer = document.createElement("DIV")
let wappIframe = document.createElement("IFRAME")
wappIframe.setAttribute("src", "https://web.whatsapp.com")

function switchDisplayMode(e) {
	if (!!e.ctrlKey && !!e.altKey && e.key === 'a') 
	{
		e.preventDefault()
		isWappDisplayed = !isWappDisplayed
		
		if (!wappIframeExists) 
		{
			wappIframeExists = true
		
			document.body.insertBefore(iframeContainer, document.body.firstChild)
			iframeContainer.style.cssText = `
			width: 650px;
			height: 300px;
			resize: both;
			position: fixed;
			top: 10%;
			left: 10%;
			overflow: hidden;
			display: block;
			z-index: 999;
			border: 3px solid lightgray;
			border-radius: 4px;
			`
			
			iframeContainer.appendChild(wappIframe)
			wappIframe.style.cssText = `
			position: absolute;
			top: 0;
			left: 0;
			border: 0;
			height: 100%;
			width: 100%;
			opacity: ${(windowOpacity/10).toFixed(1)}
			`
		}
		
		if (isWappDisplayed) iframeContainer.style.display = "block";
		else if (!isWappDisplayed) iframeContainer.style.display = "none";
	}
	
	if (!!e.ctrlKey && !!e.altKey && (e.key === '-' || e.key === '+'))
	{
		if (e.key === '-' && windowOpacity > minOpacity) windowOpacity--
		else if (e.key === '+' && windowOpacity < maxOpacity) windowOpacity++
		
		wappIframe.style.opacity = (windowOpacity/10).toFixed(1);
	}
}

document.onkeydown = switchDisplayMode;
