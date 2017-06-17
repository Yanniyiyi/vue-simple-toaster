var Toaster = {};

Toaster.install = function(Vue,options)
{
	let defaultOptions = {
		position: 'top-left',
		duration: 2500,
		animation:'fadeIn'
	}

	let validAnimations = [
		'fadeIn','slideDown','slideUp'
	]

	let validPostions = [
		'top','top-left','top-center','top-right',
		'center','center-left','center-right',
		'bottom','bottom-left','bottom-center','bottom-right'
	];

	let validTypes = [
		'warn','alert','success','error'
	];

	if(validPostions.indexOf(defaultOptions.position) < 0){
		defaultOptions.position = 'fadeIn';
	};

	if(validAnimations.indexOf(defaultOptions.animation) < 0){
		defaultOptions.animation = 'fadeIn';
	};

	Vue.prototype.$toaster = (message,position,animation,type) => {
		let currentPosition = defaultOptions.position;
		let currentAnimation = defaultOptions.animation;
		let currentType = 'normal'

		if(type && validTypes.indexOf(type) >= 0)
		{
			currentType = type;
		}

		if(position && validPostions.indexOf(position) >= 0)
		{
			currentPosition = position;
		}

		if(animation && validAnimations.indexOf(animation) >= 0)
		{
			currentAnimation = animation;
		}

		let toaster = Vue.extend({
			template: '<div class="vue-simple-toaster ' + 
			currentType + ' ' + 
			currentAnimation + ' toaster-' +
			currentPosition + '">' + message + 
			'</div>'
		});

		let tempToaster = new toaster().$mount().$el;

		document.body.appendChild(tempToaster);

		setTimeout(function(){
			document.body.removeChild(tempToaster);
		},defaultOptions.duration);
	}

	Vue.prototype.$toaster.options = (options) => {
		if(options){
			for(let property in options){
				defaultOptions[property] = options[property];
			}
		};
	}

	Vue.prototype.$toaster.options(options);


	['warn','alert','success','error'].forEach(function(type){
		Vue.prototype.$toaster[type] = function(message,position,animation){
			Vue.prototype.$toaster(message,position,animation,type);
		}
	});


}

module.exports = Toaster;