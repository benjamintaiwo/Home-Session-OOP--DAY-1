//Phone OOP  moodel 
class Phones {
	constructor(name, model, cost, year_released){//the constructor method is used for creating and initializing an object created with a Class.
		this.name = name; // the 'this' keyword refer to the current arguement or parameters (object) passed inside the constructor method
		this.model = model;
		this.cost = cost;
		this.year_released = year_released;
	}
	get_name(){//get_name method returns the name and model of the phone 
		return 'This is a  ' + this.name + this.model + ' phone' ;
	}
	get_cost(){//get_cost method returns the cost of the phone
		return  this.name + this.model + ' is sold for ' + this.cost + 'naire';
	}
	get_release_years(){//get_release_years method returns the number of years the phone was released
		const full_year = new Date().getFullYear(); // the new Date() creates a new date object, .getFullYear method gets the four digit of the present year
		return this.name + this.model + ' was released ' +  (full_year - this.year_released) + ' years ago';
	}
	get_phone_version(){//get_phone_version method returns the android version of the phone
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

module.exports = Phones;//exporting Phones class
