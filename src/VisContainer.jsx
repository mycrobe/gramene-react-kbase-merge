var React = require('react');
//var $ = require('jquery');
var test = require('./umd/kbsrc/widgets/vis/kbaseLinechart');

var VisContainer = React.createClass(
    {

        render : function() {

            return (<div></div>);

        },

        attachJQ : function() {

            var container = this.getDOMNode().parentNode;

            $(container)[this.props.kbVis](this.props.options);

        },

        shouldComponentUpdate: function(props) {
            return false;
        },

        componentDidMount: function() {

            this.attachJQ();

        }
    }
);


var containers = {
    'Barchart'          : 'kbaseBarchart',
    'Linechart'         : 'kbaseLinechart',
    'Piechart'          : 'kbasePiechart',
    'Treechart'         : 'kbaseTreechart',
    'Chordchart'        : 'kbaseChordchart',
    'CircularHeatmap'   : 'kbaseCircularHeatmap',
    'ForcedNetwork'     : 'kbaseForcedNetwork',
    'Heatmap'           : 'kbaseHeatmap',
    'Histogram'         : 'kbaseHistogram',
    'LineSerieschart'   : 'kbaseLineSerieschart',
    'Scatterplot'       : 'kbaseScatterplot',
    'Venndiagram'       : 'kbaseVenndiagram',
};

for (var container in containers) {
    var kbwidget = containers[container];

    module.exports[container] = React.createClass(
        {
            kbwidget : kbwidget,

            render : function() {

                return (
                    <VisContainer kbVis = {this.kbwidget} options = {this.props}></VisContainer>
                );

            },

            shouldComponentUpdate: function(props) {
                return false;
            },


        }
    );


};
