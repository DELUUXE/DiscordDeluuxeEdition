//META{"name":"DiscordDeluuxeEdition"}*//

/* global PluginUtilities:false, InternalUtilities:false, BdApi:false */


class DiscordDeluuxeEdition {
	getName() { return "DiscordDeluuxeEdition"; }
	getShortName() { return "DDE"; }
	getDescription() { return "Adds custom discord style by deluuxe.  style updated automatic, this plugin does not."; }
	getVersion() { return "2.0"; }
	getAuthor() { return "DELUUXE#1608"; }

	constructor() {
		this.initialized = false;
	}

	load() { }
	unload() { }

	start() {
		var libraryScript = document.getElementById('LibraryScript');
		if (libraryScript) libraryScript.parentElement.removeChild(libraryScript);
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "LibraryScript");
		document.head.appendChild(libraryScript);

		if (typeof window.Library !== "undefined") this.initialize();
		else libraryScript.addEventListener("load", () => { this.initialize(); });
	}

	initialize() {
		this.initialized = true;
		var DDEcss = 'DDEcss';
		if (!document.getElementById(DDEcss)) {
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.id = DDEcss;
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = 'https://deluuxe.github.io/DiscordDeluuxeEdition/DiscordDeluuxeEdition.css';
			link.media = 'all';
			head.appendChild(link);
		}

		PluginUtilities.showToast(this.getName() + " has started.");

		/* text box focus color */
		document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.add("textAreaFocused");
		document.getElementsByClassName("channelTextArea-1LDbYG")[0].getElementsByTagName("textarea")[0].onfocus = function(){
			document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.add("textAreaFocused");
		};
		document.getElementsByClassName("channelTextArea-1LDbYG")[0].getElementsByTagName("textarea")[0].blur = function(){
			document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.remove("textAreaFocused");
		};
		document.getElementsByClassName("guilds")[0].onclick = function(){
			setTimeout(() => {
				document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.add("textAreaFocused");
				document.getElementsByClassName("channelTextArea-1LDbYG")[0].getElementsByTagName("textarea")[0].onfocus = function(){
					document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.add("textAreaFocused");
				};
				document.getElementsByClassName("channelTextArea-1LDbYG")[0].getElementsByTagName("textarea")[0].blur = function(){
					document.getElementsByClassName("channelTextArea-1LDbYG")[0].classList.remove("textAreaFocused");
				};
			}, 200);
		};
		/* END text box focus color */
	}

	stop() {
		//BdApi.clearCSS(this.getShortName());
		PluginUtilities.showToast(this.getName() + " has stopped.");
		document.getElementById("DDEcss").remove();
	}

	getSettingsPanel() {
		return null;
	}
}
