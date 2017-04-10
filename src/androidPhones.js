const Phones = require ('./phoneSrc'); //I load the phone class so that we can inherit from the class

class Androidphones extends Phones {// the extends keyword in this program allows Androidphones to inherit properties and methods from Phones call 
	get_release_years(){
		super.get_release_years();// the super keyword is used to call functions on an object parent
		const full_year = new Date().getFullYear();
		return this.name + this.model + ' was released ' +  (full_year - this.year_released) + ' years ago';
	}
	get_phone_version(){
		super.get_phone_version();// the super keyword is used to call functions on an object parent
		if(this.year_released >= 2016){
			return this.name + this.type + ' runs on android version Nougat 7.0 - 7.1.1' ;
		}else if(this.year_released == 2015){
			return this.name + this.model + ' runs on android version Marshmallow 6.0 - 6.0.1' ;
		}else if(this.year_released == 2014){
			return this.name + this.model + ' runs on android version Lollipop  5.0 - 5.1.1' ;
		}else if(this.year_released == 2013){
			return this.name + this.model + ' runs on android version KitKat 4.4 - 4.4.4' ;
		}else{
			return 'Cannot find the android version for ' + this.name + this.model;
		}

	}
}

module.exports = Androidphones;// exporting Androidphones Class
