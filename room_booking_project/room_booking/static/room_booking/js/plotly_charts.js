    document.addEventListener("DOMContentLoaded", function () {
        fetch("{% url 'room_booking_chart_data' %}") // ใช้ Django API ที่จะสร้างด้านล่าง
            .then(response => response.json())
            .then(data => {
                // 📊 กราฟที่ 1: เปรียบเทียบราคาและขนาดห้องพัก
                var trace1 = {
                    x: data.sizes,
                    y: data.prices,
                    type: 'bar',
                    marker: { color: 'blue' },
                    name: 'Price'
                };

                var layout1 = {
                    title: 'Room Price vs Size',
                    xaxis: { title: 'Room Size (sq ft)' },
                    yaxis: { title: 'Price (THB)' }
                };

                Plotly.newPlot('price-size-chart', [trace1], layout1);

                // 📊 กราฟที่ 2: เปรียบเทียบจำนวนรีวิวกับคะแนนรีวิว
                var trace2 = {
                    x: data.reviews_count,
                    y: data.ratings,
                    mode: 'markers',
                    type: 'scatter',
                    marker: { size: 10, color: 'red' },
                    name: 'Reviews'
                };

                var layout2 = {
                    title: 'Review Count vs Rating',
                    xaxis: { title: 'Number of Reviews' },
                    yaxis: { title: 'Rating' }
                };

                Plotly.newPlot('review-rating-chart', [trace2], layout2);
            })
            .catch(error => console.error('Error loading chart:', error));
    });