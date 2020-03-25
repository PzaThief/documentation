(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{358:function(e,t,a){"use strict";a.r(t);var r=a(8),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("p",[e._v("This FAQ is still a work in progress."),a("br"),e._v("\nIf you have any questions we want to hear from you. Your feedback will help us improve this page!")]),e._v(" "),a("h2",{attrs:{id:"i-have-never-used-a-search-engine-before-can-i-use-meilisearch-anyway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-have-never-used-a-search-engine-before-can-i-use-meilisearch-anyway"}},[e._v("#")]),e._v(" I have never used a search engine before. Can I use MeiliSearch anyway?")]),e._v(" "),a("p",[e._v("Of course! No knowledge of ElasticSearch or Solr is required to use MeiliSearch.")]),e._v(" "),a("p",[e._v("MeiliSearch is really "),a("strong",[e._v("easy to use")]),e._v(" and thus accessible to all kinds of developers.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/introduction/quick_start_guide.html"}},[e._v("Take a quick tour")]),e._v(" to learn the basics of MeiliSearch!")],1),e._v(" "),a("p",[e._v("We also provide a lot of tools, including "),a("RouterLink",{attrs:{to:"/resources/sdks.html"}},[e._v("SDKs")]),e._v(", to help you integrate easily MeiliSearch in your project. We're adding new tools every day!")],1),e._v(" "),a("p",[e._v("Plus, you can "),a("RouterLink",{attrs:{to:"/resources/faq.html#how-can-i-contact-the-meilisearch-team"}},[e._v("contact us")]),e._v(" if you need any help. We will answer for sure!")],1),e._v(" "),a("h2",{attrs:{id:"do-i-need-to-configure-meilisearch-to-get-it-working"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-configure-meilisearch-to-get-it-working"}},[e._v("#")]),e._v(" Do I need to configure MeiliSearch to get it working?")]),e._v(" "),a("p",[e._v("MeiliSearch configuration works out-of-the-box. It means, by default, MeiliSearch configures necessary settings for providing a powerful and relevant search.")]),e._v(" "),a("p",[e._v("For example, without requiring any configuration, MeiliSearch is typo tolerant."),a("br"),e._v("\nType "),a("code",[e._v("craete an inedx")]),e._v(" in the search bar of this documentation to experience the typo tolerance of our search engine.")]),e._v(" "),a("p",[e._v("To find out more about the relevancy of MeiliSearch, take a look at this detailed "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#ranking-rules"}},[e._v("explanation")]),e._v(".")],1),e._v(" "),a("p",[e._v("However, MeiliSearch is of course "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[e._v("highly customizable")]),e._v(" in order to adapt the search to your needs by setting synonyms, stop words, and custom ranking rules.")],1),e._v(" "),a("h2",{attrs:{id:"how-to-know-if-meilisearch-perfectly-fits-my-use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-know-if-meilisearch-perfectly-fits-my-use-cases"}},[e._v("#")]),e._v(" How to know if MeiliSearch perfectly fits my use cases?")]),e._v(" "),a("p",[e._v("Since MeiliSearch is an open-source and easy-to-use tool, you can give it a try using your data. Follow this "),a("RouterLink",{attrs:{to:"/guides/introduction/quick_start_guide.html"}},[e._v("guide")]),e._v(" to get a quick start!")],1),e._v(" "),a("p",[e._v("Besides, we published a "),a("RouterLink",{attrs:{to:"/resources/comparison_to_alternatives.html"}},[e._v("comparison between MeiliSearch and other search engines")]),e._v(" with the goal of providing an overview of MeiliSearch alternatives.")],1),e._v(" "),a("h2",{attrs:{id:"which-languages-can-meilisearch-handle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which-languages-can-meilisearch-handle"}},[e._v("#")]),e._v(" Which languages can MeiliSearch handle?")]),e._v(" "),a("p",[e._v("MeiliSearch works perfectly with English, kanji, and Romance languages."),a("br"),e._v("\nIf you have any hesitation about your language handling, please contact us.")]),e._v(" "),a("h2",{attrs:{id:"do-you-provide-a-real-dataset-to-test-meilisearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-you-provide-a-real-dataset-to-test-meilisearch"}},[e._v("#")]),e._v(" Do you provide a real dataset to test MeiliSearch?")]),e._v(" "),a("p",[e._v("For now, we provide this "),a("a",{attrs:{href:"https://www.notion.so/meilisearch/A-movies-dataset-to-test-Meili-1cbf7c9cfa4247249c40edfa22d7ca87#b5ae399b81834705ba5420ac70358a65",target:"_blank",rel:"noopener noreferrer"}},[e._v("movies dataset"),a("OutboundLink")],1),e._v(". More datasets are coming soon!")]),e._v(" "),a("h2",{attrs:{id:"i-did-a-call-to-an-api-route-and-i-only-got-an-updateid-as-a-response-what-does-it-mean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-did-a-call-to-an-api-route-and-i-only-got-an-updateid-as-a-response-what-does-it-mean"}},[e._v("#")]),e._v(" I did a call to an API route, and I only got an "),a("code",[e._v("updateId")]),e._v(" as a response. What does it mean?")]),e._v(" "),a("p",[e._v("MeiliSearch is an "),a("strong",[e._v("asynchronous API")]),e._v("."),a("br"),e._v("\nIt means that in many cases (e.g., documents addition), you will receive as server response a simple JSON containing only an "),a("code",[e._v("updateId")]),e._v(" attribute. For example:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This kind of "),a("strong",[e._v("successful response")]),e._v(" indicates that the operation has been taken into account, but may not have been executed yet."),a("br")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can check the status of the operation using this "),a("code",[e._v("updateId")]),e._v(" and the "),a("RouterLink",{attrs:{to:"/references/updates.html#get-an-update-status"}},[e._v("get update status route")]),e._v("."),a("br"),e._v("\nIn addition, MeiliSearch delivers a global route to "),a("RouterLink",{attrs:{to:"/references/updates.html#get-all-update-status"}},[e._v("track all your update status")]),e._v("."),a("br"),e._v(" "),a("strong",[e._v("This way, you will be informed if your action was processed or not, and "),a("u",[e._v("why")])]),e._v(".")],1)]),e._v(" "),a("p",[e._v("If you are curious about how the asynchronous part of MeiliSearch works, you can find more information "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/asynchronous_updates.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"i-am-trying-to-add-my-documents-but-i-keep-receiving-a-400-invalid-data-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-trying-to-add-my-documents-but-i-keep-receiving-a-400-invalid-data-response"}},[e._v("#")]),e._v(" I am trying to add my documents but I keep receiving a "),a("code",[e._v("400 - Invalid data")]),e._v(" response.")]),e._v(" "),a("p",[e._v("MeiliSearch API only accepts JSON format."),a("br"),e._v("\nIn case of a "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[e._v("document addition")]),e._v(", only an array of objects is expected.")],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("400 - Invalid data")]),e._v(" response probably means that your data is not in an expected format.")]),e._v(" "),a("p",[e._v("Most common errors:")]),e._v(" "),a("ul",[a("li",[e._v("Extraneous comma at the end of a line.")]),e._v(" "),a("li",[e._v("Data is not an array of objects: for the "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[e._v("document addition route")]),e._v(", MeiliSearch only accepts an array in the body even if there is only one document.")],1)]),e._v(" "),a("p",[e._v("Wrong:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Pride and Prejudice"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Good:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Pride and Prejudice"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/stedolan/jq",target:"_blank",rel:"noopener noreferrer"}},[e._v("jq"),a("OutboundLink")],1),e._v(" command line tool can greatly help you check the format of your data.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" your_file.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq\n")])])])]),e._v(" "),a("h2",{attrs:{id:"my-document-upload-failed-with-the-document-id-is-missing-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-document-upload-failed-with-the-document-id-is-missing-error"}},[e._v("#")]),e._v(" My document upload failed with the "),a("code",[e._v("document id is missing")]),e._v(" error.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("TLDR;")]),e._v(" "),a("p",[e._v("Most common reasons:")]),e._v(" "),a("ul",[a("li",[e._v("A unique identifier in your document is missing.")]),e._v(" "),a("li",[e._v("The unique identifier of your document is not well-formatted.")])])]),e._v(" "),a("p",[e._v("Each document is required to contain a unique identifier. This identifier attribute is the "),a("code",[e._v("primary key")]),e._v(".")]),e._v(" "),a("p",[e._v("How do I know the primary key of my index? "),a("RouterLink",{attrs:{to:"/references/indexes.html#get-one-index"}},[e._v("Check this route")]),e._v(". The "),a("code",[e._v("null")]),e._v(" value means it has not been defined yet.")],1),e._v(" "),a("p",[e._v("By default, the primary key will be inferred from the first document received. MeiliSearch will search for an attribute that contains the string "),a("code",[e._v("id")]),e._v(" in a case-insensitive manner (e.g., "),a("code",[e._v("uid")]),e._v(", "),a("code",[e._v("MovieId")]),e._v(", "),a("code",[e._v("ID")]),e._v(", "),a("code",[e._v("123id123")]),e._v("). If none has been found, no documents will be added.")]),e._v(" "),a("p",[e._v("If you get a "),a("code",[e._v("document id is missing")]),e._v(" error, the primary key was not recognized. This means your primary key is wrongly formatted. Sending primary key's name as a query parameter "),a("RouterLink",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[e._v("when adding documents")]),e._v(" should solve this issue.")],1),e._v(" "),a("p",[e._v("Note that the primary key value must contain only "),a("code",[e._v("A-Z a-z 0-9")]),e._v(" and "),a("code",[e._v("-_")]),e._v(" characters.")]),e._v(" "),a("p",[e._v("Wrong:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@BI+* ^5h2%"')]),e._v("\n")])])]),a("p",[e._v("Good:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"_Aabc012_"')]),e._v("\n")])])]),a("p",[e._v("See more "),a("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[e._v("information about the primary key")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"i-have-uploaded-my-documents-but-i-get-no-result-when-i-search-in-my-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-have-uploaded-my-documents-but-i-get-no-result-when-i-search-in-my-index"}},[e._v("#")]),e._v(" I have uploaded my documents, but I get no result when I search in my index.")]),e._v(" "),a("p",[e._v("Your documents upload probably failed."),a("br"),e._v("\nTo understand what happened, please check this "),a("RouterLink",{attrs:{to:"/resources/faq.html#i-did-a-call-to-an-api-route-and-i-only-got-an-updateid-as-a-response-what-does-it-mean"}},[e._v("answer")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"does-meilisearch-deliver-an-interface-to-search-in-my-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-meilisearch-deliver-an-interface-to-search-in-my-documents"}},[e._v("#")]),e._v(" Does MeiliSearch deliver an interface to search in my documents?")]),e._v(" "),a("p",[e._v("Yes, a web interface is available on the default address and port of your MeiliSearch instance.")]),e._v(" "),a("p",[e._v("All you need to do is open your web browser and enter MeiliSearch’s address to visit it. This leads you to a web page with a search bar that allows you to search in a selected index.")]),e._v(" "),a("p",[e._v("Since the production environment requires an API-key for searching, the web interface is only available in "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/installation.html#environments"}},[e._v("development mode")]),e._v(".")],1),e._v(" "),a("p",[e._v("Here is more information about the "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/web_interface.html"}},[e._v("MeiliSearch web interface")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"i-do-not-understand-the-relevancy-of-my-search-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-do-not-understand-the-relevancy-of-my-search-results"}},[e._v("#")]),e._v(" I do not understand the relevancy of my search results.")]),e._v(" "),a("p",[e._v("The search responses are sorted according to a set of consecutive rules called ranking rules."),a("br"),e._v("\nHere is more information about the "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html"}},[e._v("relevancy of MeiliSearch")]),e._v(".")],1),e._v(" "),a("p",[e._v("MeiliSearch applies these ranking rules in default order. This order can be modified. Furthermore, these rules can be deleted and new ones can be added."),a("br"),e._v("\nAll of the ranking rules can be modified via the "),a("RouterLink",{attrs:{to:"/references/ranking_rules.html"}},[e._v("dedicated routes in the MeiliSearch API")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"do-you-provide-a-public-roadmap-for-meilisearch-and-its-integration-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-you-provide-a-public-roadmap-for-meilisearch-and-its-integration-tools"}},[e._v("#")]),e._v(" Do you provide a public roadmap for MeiliSearch and its integration tools?")]),e._v(" "),a("p",[e._v("Yes, as MeiliSearch and its integration tools are opensource, we maintain a "),a("a",{attrs:{href:"https://github.com/orgs/meilisearch/projects/2",target:"_blank",rel:"noopener noreferrer"}},[e._v("public roadmap"),a("OutboundLink")],1),e._v(" for the general features we plan to do.")]),e._v(" "),a("p",[e._v("For more accurate features and issues, everything is detailed in the issues of all our "),a("a",{attrs:{href:"https://github.com/meilisearch/MeiliSearch/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repositories"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"how-can-i-contact-the-meilisearch-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-contact-the-meilisearch-team"}},[e._v("#")]),e._v(" How can I contact the MeiliSearch team?")]),e._v(" "),a("p",[e._v("There are many ways to contact us:")]),e._v(" "),a("ul",[a("li",[e._v("At "),a("a",{attrs:{href:"mailto:bonjour@meilisearch.com"}},[e._v("bonjour@meilisearch.com")]),e._v(": English or French is welcome! 🇫🇷 🇬🇧")]),e._v(" "),a("li",[e._v("Via the chat box at the bottom right of this page which is available on every page of this documentation and on "),a("a",{attrs:{href:"https://www.meilisearch.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our landing page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("By opening an issue in the "),a("a",{attrs:{href:"https://github.com/meilisearch/MeiliSearch",target:"_blank",rel:"noopener noreferrer"}},[e._v("MeiliSearch repository"),a("OutboundLink")],1),e._v(" or in the "),a("a",{attrs:{href:"https://github.com/meilisearch/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation repository"),a("OutboundLink")],1),e._v(" depending on your need.")])]),e._v(" "),a("p",[e._v("All the MeiliSearch team is available to answer all your questions."),a("br"),e._v("\nEvery feedback is appreciated. We really thank you for your contribution!")])])}),[],!1,null,null,null);t.default=s.exports}}]);