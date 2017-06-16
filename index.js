var Toaster = {};

Toaster.install = function(Vue,options)
{
	let defaultOptions = {
		type: 'normal',
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

	if(options){
		for(let property in options){
			defaultOptions[property] = options[property];
		}
	};


	if(validPostions.indexOf(defaultOptions.position) < 0){
		defaultOptions.position = 'fadeIn';
	};

	if(validAnimations.indexOf(defaultOptions.animation) < 0){
		defaultOptions.animation = 'fadeIn';
	};

	Vue.prototype.$toaster = (message,position,animation) => {
		let currentPosition = defaultOptions.position;
		let currentAnimation = defaultOptions.animation;

		if(position && validPostions.indexOf(position) >= 0)
		{
			currentPosition = position;
		}

		if(animation && validAnimations.indexOf(animation) >= 0)
		{
			currentAnimation = animation;
		}

		let toaster = Vue.extend({
			template: '<div class="vue-simple-toaster ' +  currentAnimation + ' toaster-' + currentPosition + '">' + message + '</div>'
		});

		let tempToaster = new toaster().$mount().$el;

		document.body.appendChild(tempToaster);

		setTimeout(function(){
			document.body.removeChild(tempToaster);
		},defaultOptions.duration);
	}
}

module.exports = Toaster;