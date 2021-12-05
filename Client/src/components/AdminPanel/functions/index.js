export default function orderData(state, type) {

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let sales = Array(12).fill(0);

    const orderData = state.map(e => {

        const date = e.createdAt.slice(0, -14).split('-').reverse()

        const dateObj = {
            day: Number(date[0]),
            month: Number(date[1]),
            // month: randomIntFromInterval(0,12),
            year: Number(date[2])
        }

        const objMod = {
            ...e,
            createdAt: dateObj
        }

        if (type === 'sales') {
            switch (objMod.createdAt.month) {

                case 1:
                    sales[0] += 1;
                    break;

                case 2:
                    sales[1] += 1;
                    break;

                case 3:
                    sales[2] += 1;
                    break;

                case 4:
                    sales[3] += 1;
                    break;

                case 5:
                    sales[4] += 1;
                    break;

                case 6:
                    sales[5] += 1;
                    break;

                case 7:
                    sales[6] += 1;
                    break;

                case 8:
                    sales[7] += 1;
                    break;

                case 9:
                    sales[8] += 1;
                    break;

                case 10:
                    sales[9] += 1;
                    break;

                case 11:
                    sales[10] += 1;
                    break;

                case 12:
                    sales[11] += 1;
                    break;


                default:
                    break;
            }
        } else if (type === 'money') {
            switch (objMod.createdAt.month) {
                case 1:
                    sales[0] += e.price;
                    break;

                case 2:
                    sales[1] += e.price;
                    break;

                case 3:
                    sales[2] += e.price;
                    break;

                case 4:
                    sales[3] += e.price;
                    break;

                case 5:
                    sales[4] += e.price;
                    break;

                case 6:
                    sales[5] += e.price;
                    break;

                case 7:
                    sales[6] += e.price;
                    break;

                case 8:
                    sales[7] += e.price;
                    break;

                case 9:
                    sales[8] += e.price;
                    break;

                case 10:
                    sales[9] += e.price;
                    break;

                case 11:
                    sales[10] += e.price;
                    break;

                case 12:
                    sales[11] += e.price;
                    break;


                default:
                    break;
            }
        }

        
    })
    return  {
        months : months,
        sales : sales,
    }
}