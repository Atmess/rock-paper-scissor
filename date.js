export function initDate(){


                const yearstime = document.getElementById('year');
                const monthtime = document.getElementById('month');
                const daytime = document.getElementById('day');
                const datetime = document.getElementById('date-time');

                const now = new Date();

                yearstime.textContent = now.getFullYear(); 
                monthtime.textContent = now.toLocaleString('default', { month: 'short' }) ;
                daytime.textContent = now.toLocaleString('default', { weekday: 'short' }) ;
                datetime.textContent = now.getDate();

}