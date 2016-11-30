(function() {
	var Person = {
		people: ["Sonu", "Monu"],
		init: function(name) {
			this.setName(name);
			this.cacheDom();
			this.bindEvents();
			this.render.call(this);
			console.log(this.$close.on('click'));
		},
		setName: function(name) {
			this.name = name;
		},
		cacheDom: function() {
			this.$el = $('#people-box');
			this.$input = this.$el.find('input');
			this.$button = this.$el.find('button');
			this.$list = this.$el.find('ul');
			this.$close = this.$el.find('span.close');
		},
		bindEvents: function() {
			this.$button.on('click', this.addPerson.bind(this));
			this.$close.on('click', this.removePerson);
		},
		render: function() {
			this.$list.html('');
			this.people.forEach((function(person){
				this.$list.append('<li>' + person + ' <span class="close">close</span></li>');
			}).bind(this));
		},
		addPerson: function() {
			this.people.push(this.$input.val());
			this.render();
			this.$input.val('');
		},
		removePerson: function(event) {
			console.log("Hello");
			console.log(event.target);
		},
	}

	Person.init();
})()