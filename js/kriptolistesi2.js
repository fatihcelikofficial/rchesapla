if("undefined"==typeof jQuery){var coinyepJQuery=document.createElement("script");coinyepJQuery.type="text/javascript",coinyepJQuery.src="https://code.jquery.com/jquery-3.3.1.min.js",document.getElementsByTagName("head")[0].appendChild(coinyepJQuery)}var coinyepWaitForLoad=function(){"undefined"!=typeof jQuery?jQuery(document).ready(function(){jQuery(function(){jQuery("head").append("<style type='text/css'>coinyep-widget-list{min-width: 250px !important; display: block}coinyep-widget-list ul {border-radius: 4px; border: 1px solid rgba(100,100,100,0.4); list-style-type: none; margin:0; padding:0; max-width: 400px}coinyep-widget-list ul li {padding: .5rem;border-bottom:1px solid rgba(100,100,100,0.3); list-style: none !important; font-family: sans-serif; line-height:1.5; font-size:1rem}coinyep-widget-list ul li a{text-decoration: none;color: #333232}coinyep-widget-list ul li a:hover{text-decoration: none}.coinyep-list-last{border-bottom: 0px !important;text-align:center;line-height: 0.2rem !important;color:gray !important}.coinyep-small{font-size:.7rem !important; font-family:sans-serif}.coinyep-bold {font-weight:600}.coinyep-positive{color:green}.coinyep-negative{color:red}</style>")});var e=[];e.en="Powered by",e.es="Con tecnologÃ­a de",e.de="PrÃ¤sentiert von",e.fr="Fourni par",e.it="Offerto da",e.id="Didukung oleh",e.ms="Powered by",e.nl="Aangedreven door",e.no="Drevet av",e.pl="TreÅ›Ä‡ dostarczona przez",e.pt="Fornecido por",e.ru="ĞŸĞ¸Ñ‚Ğ°Ñ‚ÑŒÑÑ Ğ¾Ñ‚",e.sv="Powered by",e.tr="TarafÄ±ndan desteklenmektedir",e.vi="ÄÆ°á»£c há»— trá»£ bá»Ÿi",e.ko="Powered by",e.he='××•× ×¢ ×¢"×™',e.th="à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢",e.hi="à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¸à¤‚à¤šà¤¾à¤²à¤¿à¤¤",e.zh="ä¾›ç”µ",e.ja="æ­è¼‰",e.ar="Ù…Ø´ØºÙ„ Ø¨ÙˆØ§Ø³Ø·Ø©";var t=jQuery("coinyep-widget-list").attr("currency"),i=jQuery("coinyep-widget-list").attr("list"),n=jQuery("coinyep-widget-list").attr("lang"),o=void 0!==e[n]?e[n]:e.en,a="https://coinyep.com/api/v1/?list="+i+"&currency="+t+"&lang="+n;jQuery.getJSON(a,{format:"json"},function(e){var i="";i+="<ul>",jQuery.each(e,function(o,a){var r=e[o].price;r=(r=parseFloat(r)).toLocaleString(n,{maximumFractionDigits:10});var s=e[o].base_symbol,p=e[o].base_name,c="https://coinyep.com/"+n+"/ex/"+s+"-"+t;e[o].price_change>=0?change='<span class="coinyep-positive">â–²</span>':change='<span class="coinyep-negative">â–¼</span>',i+='<li><a href="'+c+'" target="_blank">'+p+" ("+s+') <span class="coinyep-bold">'+r+"</span> "+t+" "+change+"</a></li>"}),i+='<li class="coinyep-list-last"><span class="coinyep-small">'+o+' </span><a href="https://coinyep.com/" target="_blank"><span class="coinyep-small coinyep-bold">CoinYEP</span></a></li>',i+="</ul>",jQuery("coinyep-widget-list").html(i)})}):window.setTimeout(coinyepWaitForLoad,1e3)};window.setTimeout(coinyepWaitForLoad,1e3);