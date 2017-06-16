var Toaster = {};

Toaster.install = function(Vue,options)
{
	let defaultOptions = {
		position: 'top-left',
		duration: 2500
	}

	let validPostions = [
		'top','top-left','top-center','top-right',
		'center','center-left','center-right',
		'bottom','bottom-left','bottom-center','bottom-right'
	];

	if(options){
		for(let property in options){
			defaultOptions[property] = options[property];
		}
	};


	if(validPostions.indexOf(defaultOptions.position) < 0){
		defaultOptions.position = 'top-left';
	};

	Vue.prototype.$toaster = (message,position) => {

		if(position && validPostions.indexOf(position) >= 0)
		{
			defaultOptions.position = position;
		}

		let toaster = Vue.extend({
			template: '<div class="vue-simple-toaster toaster-' + defaultOptions.position + '">' + message + '</div>'
		});

		let tempToaster = new toaster().$mount().$el;

		document.body.appendChild(tempToaster);

		setTimeout(function(){
			document.body.removeChild(tempToaster);
		},defaultOptions.duration);
	}
}

module.exports = Toaster;