import{_ as a,E as e,c as i,J as o,w as n,a4 as l,o as s}from"./chunks/framework.qqx5a1c4.js";const w=JSON.parse('{"title":"Setting Up The Server - Self Hosted","titleTemplate":"Simple Voice Chat","description":"","frontmatter":{"titleTemplate":"Simple Voice Chat","prev":{"text":"Server Setup","link":"./server_setup"},"next":false},"headers":[],"relativePath":"minecraft/voicechat/wiki/server_setup_self_hosted.md","filePath":"minecraft/voicechat/wiki/server_setup_self_hosted.md"}'),c={name:"minecraft/voicechat/wiki/server_setup_self_hosted.md"},d=l('<h1 id="setting-up-the-server-self-hosted" tabindex="-1">Setting Up The Server - Self Hosted <a class="header-anchor" href="#setting-up-the-server-self-hosted" aria-label="Permalink to &quot;Setting Up The Server - Self Hosted&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">NOTE</p><p>The setup requires some in-depth knowledge about networking and port-forwarding. It is not recommended to do this without any prior knowledge about this topic.</p><p>Opening ports is different for every setup. It depends on your OS, your router, your ISP, your hoster and many other things. <strong>Please don&#39;t ask us for help with port-forwarding!</strong></p></div><h2 id="on-a-vps-or-root-server" tabindex="-1">On a VPS or root server <a class="header-anchor" href="#on-a-vps-or-root-server" aria-label="Permalink to &quot;On a VPS or root server&quot;">​</a></h2><ul><li>Open the voice chat port (<code>24454</code> <code>UDP</code> by default) <ul><li>In your servers firewall</li><li>In your server hosting panel (Not always present)</li></ul></li></ul><h2 id="on-your-own-computer-or-a-machine-in-your-local-network" tabindex="-1">On Your Own Computer or a Machine in Your Local Network <a class="header-anchor" href="#on-your-own-computer-or-a-machine-in-your-local-network" aria-label="Permalink to &quot;On Your Own Computer or a Machine in Your Local Network&quot;">​</a></h2><ul><li>Open the voice chat port (<code>24454</code> <code>UDP</code> by default) <ul><li>In the firewall of the machine, the server is running on</li><li>In your router</li></ul></li><li>When connecting to your Minecraft server in-game, please make sure you use the local IP address of the server in your internal network or <code>localhost</code> if the server is running on the same machine, you are playing on</li><li>Make sure your router allows devices in your local network to communicate with each other</li></ul><h2 id="with-pterodactyl" tabindex="-1">With Pterodactyl <a class="header-anchor" href="#with-pterodactyl" aria-label="Permalink to &quot;With Pterodactyl&quot;">​</a></h2><ul><li>Go to <code>Settings &gt; Nodes &gt; your-node &gt; Allocation</code></li><li>Go to the <code>Assign New Allocations</code> panel</li><li>Enter the servers IP and the voice chat port (<code>24454</code> <code>UDP</code> by default)</li><li>Press <code>Submit</code></li></ul>',8);function h(u,p,m,_,f,v){const t=e("WikiTracker"),r=e("ClientOnly");return s(),i("div",null,[d,o(r,null,{default:n(()=>[o(t,{name:"setup"})]),_:1})])}const k=a(c,[["render",h]]);export{w as __pageData,k as default};
