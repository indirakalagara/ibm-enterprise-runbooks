(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"0iBV":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var o,r=a("k1TG"),n=a("8o2o"),A=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("T0C+"),a("qKvR"),{}),c=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(A.b)("div",e)}),l={_frontmatter:s},b=i.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(A.b)(b,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(A.b)(c,{mdxType:"PageDescription"}),Object(A.b)("h2",null,Object(A.b)("strong",{parentName:"h2"},"Overview")),Object(A.b)("p",null,"Protecting the sensitive information in the Red Hat OpenShift on IBM Cloud cluster to ensure data integrity and to prevent the data from being exposed to unauthorized users using IBM Key Protect."),Object(A.b)("p",null,"The sensitive data at different levels in the cluster, will require appropriate protection."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"Cluster-level: Cluster configuration data is stored in the etcd component of the OpenShift master. Data in etcd is stored on the local disk of the OpenShift master and is backed up to IBM Cloud Object Storage. Data is encrypted during transit to IBM Cloud Object Storage and at rest. To enable encryption for the etcd data on the local disk of your OpenShift master is by enabling a key management service provider (IBM Key Protect) for the cluster.")),Object(A.b)("li",{parentName:"ul"},Object(A.b)("p",{parentName:"li"},"App-level: When the application is deployed, do not store confidential information, such as credentials or keys, in the YAML configuration file, configmaps, or scripts. Instead, use Kubernetes secrets, such as an imagePullSecret for registry credentials. This helps to encrypt data in Kubernetes secrets to prevent unauthorized users from accessing sensitive app information."))),Object(A.b)("p",null,"IBM Key Protect for IBM Cloud helps in provision encrypted keys for apps across IBM Cloud services. This provides the benefit of securing the keys by FIPS 140-2 Level 3 certified cloud-based hardware security modules (HSMs) that protect against the theft of information. The Key Protect interface simplifies the management of multiple encryption services. This service provides the ability to manage and sort encryption keys in one centralized location, or can separate keys by project and house them in different IBM Cloud spaces."),Object(A.b)("h2",null,Object(A.b)("strong",{parentName:"h2"},"Install")),Object(A.b)("p",null,"Steps to set up the key management service integration with roks."),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Setup the IBM key protect service"),Object(A.b)("li",{parentName:"ul"},"Setup the root key"),Object(A.b)("li",{parentName:"ul"},"Configure the root key to the roks cluster")),Object(A.b)("h3",null,Object(A.b)("strong",{parentName:"h3"},"Setup IBM Key Protect Service")),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Login to IBM Cloud"),Object(A.b)("li",{parentName:"ul"},"Access the IBM Cloud catalog"),Object(A.b)("li",{parentName:"ul"},"Filter/Search for the Key Protect service (part of the security category)"),Object(A.b)("li",{parentName:"ul"},"select the service(Key Protect) and navigate to the create page"),Object(A.b)("li",{parentName:"ul"},"Provide the input parameters and click create button to provision the IBM Key Protect Service ")),Object(A.b)("h3",null,Object(A.b)("strong",{parentName:"h3"},"Setup the root key")),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Access the provisioned Key Protect instance"),Object(A.b)("li",{parentName:"ul"},"Access the ‘Manage ‘Keys’ tab in the left nav"),Object(A.b)("li",{parentName:"ul"},"Now click on the ‘Add Key’ button"),Object(A.b)("li",{parentName:"ul"},"you have a choice to create a new key or import your own key option. create a ‘root key’, for the cluster to be secured.")),Object(A.b)("p",null,Object(A.b)("strong",{parentName:"p"},"Note:"),"  Ensure you don’t delete this root key, after you have encrypted the cluster"),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"506px"}},"\n      ",Object(A.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABKUlEQVQoz62Sa4qDMBSFs6IK0rUpgj+6oS5CBOkKdAVWoT9qfdRX4hmPTiSd0mkH5sLHvTHJSXKP4na7oSgKXK9XsFZKQUq5wPo3uGYcRyg5ou0kznkHcb/fUVXVxjAMG23bous69H2/1OaYmKEmzPMTxOVyQZqmYM6yDHmeb5kHNE0DHlrX9VLrMcWnaVbBtGWG4HP5VL2omTfW3/A272IVY15rYW5mH9p+vb5e/I5H0VmQQrwlezJKhX6Ym6ymj8RM0U2QQjRAT9K9v8bDDfWT12avLmpHP4G/jtkewY9lWS7G0NXaMMVEO/yTJ0H8c4jD4QDf9+E4DlzXfYLfPc/D6XRCkiSI43jJrxD7/R62bWO328GyrCVr9Jjzx+MRURQhCAKEYfiSL11jfGZgCQ53AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"setup-rootkey",title:"setup-rootkey",src:"/ibm-enterprise-runbooks/static/99cd1b03cfa002f821adf9a918019f94/add03/rootkey-creation.png",srcSet:["/ibm-enterprise-runbooks/static/99cd1b03cfa002f821adf9a918019f94/7fc1e/rootkey-creation.png 288w","/ibm-enterprise-runbooks/static/99cd1b03cfa002f821adf9a918019f94/add03/rootkey-creation.png 506w"],sizes:"(max-width: 506px) 100vw, 506px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("h3",null,Object(A.b)("strong",{parentName:"h3"},"Enable KMS to the roks cluster")),Object(A.b)("p",null,"Follow the below user interface approach to enable the kMS for the cluster"),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Access the roks cluster that is provisioned "),Object(A.b)("li",{parentName:"ul"},"Navigate to the Dashboard on the cluster"),Object(A.b)("li",{parentName:"ul"},"As part of the dashboard, you should be able to see the “Key management service” and along side the Enable button, as depicted below")),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(A.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe8miKP/xAAVEAEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAQABBQJr/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAAMBAQAAAAAAAAAAAAAAAQAhMRBx/9oACAEBAAE/IcjfkAKJvv8A/9oADAMBAAIAAwAAABDTz//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAwADAQAAAAAAAAAAAAABABExECFBcf/aAAgBAQABPxB7VfkIAaVo+wCgAwDJh8YYcf/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"enable-kms-roks",title:"enable-kms-roks",src:"/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/2e753/roks-kms-enable.jpg",srcSet:["/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/69549/roks-kms-enable.jpg 288w","/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/473e3/roks-kms-enable.jpg 576w","/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/2e753/roks-kms-enable.jpg 1152w","/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/74f4b/roks-kms-enable.jpg 1728w","/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/de5bb/roks-kms-enable.jpg 2304w","/ibm-enterprise-runbooks/static/d6d6a5d1e32f06f5626177ac49924333/2b39a/roks-kms-enable.jpg 2480w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},"Click on the “Key management service” Enable button to enable the KMS for the cluster"),Object(A.b)("li",{parentName:"ul"},"Now select the Key management service that you have provisioned and the root key from the drop down options appear in the pop up screen"),Object(A.b)("li",{parentName:"ul"},"Click on the Enable option to enable the KMS for the cluster ")),Object(A.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"293px"}},"\n      ",Object(A.b)("span",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAABm0lEQVQ4y6WSu0oDURCGFy2sxCqdnVi4ESRg42pISGmjhdioCOYtxEKfwGqTxScI8QUEIX0ewiKEXMj9nt3s5Tf/0ZxsNMEED3yc2WH555+Zo2B8RqORwLIsmKYpv/24rou/jud5UBj0ej202220Wi00Gg10Oh0R+3PD4VCIOo7zC+YnBYUgnRWLRZTLZRQKBREPBgP0+30Ji3a73bmwIDuTgqxeqVRQr9dRq9UE/JFOJywSI+xECrLvRfNYlsn/0iFbajabos3/HLkUzpDWKUzrq8KR2bY9dchkLpdDtVoVw/fPbhk4c4rKGRJW+FnZMi3pYCHm1823Kh1yu9wUhf3vi0V4rzzDTCaDbDYrFlMqlQR8k/l8XrTD6rbjYmR7i3HIt8MV9ui756Mkk0nouo5EIgHDMATMTWMDL4aO59QH7tPAQ8rFY9rD0+t8lFAohEgkAk3ToKrqLMEg9tR9HKg7CJy+YesW2I47UC7GrZ2NOZ9DOBxGLBZDNBoVorMc40g7QUQ7xO7lOzbvgEDcwsaNjbUrG+vXP3HxCXryM9/KETv4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(A.b)("img",Object(r.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"enable-kms",title:"enable-kms",src:"/ibm-enterprise-runbooks/static/c4c47a47785d774ce894590ea982b106/7b711/enable-kms.png",srcSet:["/ibm-enterprise-runbooks/static/c4c47a47785d774ce894590ea982b106/7fc1e/enable-kms.png 288w","/ibm-enterprise-runbooks/static/c4c47a47785d774ce894590ea982b106/7b711/enable-kms.png 293w"],sizes:"(max-width: 293px) 100vw, 293px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(A.b)("p",null,Object(A.b)("strong",{parentName:"p"},"Note")," Ensure the root key should not be deleted from the IBM Key Protect, once the root key is activated to the cluster"),Object(A.b)("p",null,Object(A.b)("strong",{parentName:"p"},"Note"),"\nyou can also enable the KMS using CLI based approach for the cluster as per the below reference:"),Object(A.b)("ul",null,Object(A.b)("li",{parentName:"ul"},Object(A.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/openshift?topic=openshift-encryption"}),"Setting up KMS for roks using CLI"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ibmcloud-kms-roks-index-mdx-3f96e1d1029b3eaa02ce.js.map