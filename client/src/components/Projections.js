var React = require('react');
var Chart = require('chart.js')
var ItemStore = require('../stores/itemStore')


var Projections = React.createClass({
	componentDidMount: function () {
	var ctx = document.getElementById("myChart")
	var myChart = new Chart(ctx, {
		circumference: Math.PI,
	    type: 'bar',
	    data: {
	        labels: ["Goal", "Net Income"],
	        datasets: [{
	            label: 'Projected',
	            data: [ItemStore.getGoal(), ItemStore.getNet() * ItemStore.getMonths()],
	            backgroundColor: [
	            	'rgba(54, 162, 235, 0.2)',
	                this.changeColor(0.2),
	                
	            ],
	            borderColor: [
	            	'rgba(54, 162, 235, 1)',
	                this.changeColor(1),
	            ],
	            borderWidth: 1
	        }]
	    },

	    options: {
	    	scales: {
	    		yAxes: [{
	    			ticks: {
	    				beginAtZero: true 
	    			}
	    		}]
	    	}
	    }
	   
	});
},
	changeColor: function (opacity) {
		if (ItemStore.getNet() * ItemStore.getMonths() >= ItemStore.getGoal()) { 
			return 'rgba(0, 204, 0, '+ opacity +')'
		} else {
			return 'rgba(255, 99, 132,'+ opacity +')'
		}
	},
	render: function () {
		return (
			<div>
				<canvas id="myChart" width="100" height='100'></canvas>
				<div>{ItemStore.getGoal()}</div>
				<div>{ItemStore.getMonths()}</div>
			</div>
		)
	}
})

module.exports = Projections;