var app = new Vue ({
	el: '#app',
	data: {
		sol: 0
	},
	methods: {
		inc: function() {
			this.sol += 1
		},
		dec: function() {
			this.sol -= 1
		},

		multiply: function() {
			this.sol *= 2
		},

		divided: function() {
			this.sol /= 2
		}
	}
})