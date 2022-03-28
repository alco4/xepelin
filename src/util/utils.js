import moment from "moment";
import 'moment/locale/es'

export const formatDate = date => {
    moment.locale('es');
    return moment(date).format('DD MMM YYYY')
}