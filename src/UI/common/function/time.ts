class Time {
   getCurrentDay() {
      return new Date().getDay();
   }
   getCurrentMonth(format?: string) {
      const date = new Date();
      const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      switch (format) {
         case 'MMM':
         return month[date.getMonth()];

         case 'MM':
            
            break;

         case 'M':
            
            break;
      
         default:
            return month[date.getMonth()];
      }
      
   }
}

export default new Time()