export const times = sendtime => {
    try {
        //将当前时间转换为"yyyy-MM-dd hh:mm:ss"格式
        String.prototype.ToString = function (format) {
            var dateTime = new Date(parseInt(this.substring(6, this.length - 2)));
            format = format.replace("yyyy", dateTime.getFullYear());
            format = format.replace("yy", dateTime.getFullYear().toString().substr(2));
            format = format.replace("MM", dateTime.getMonth() + 1 >= 10 ? (dateTime.getMonth() + 1) : "0" + (dateTime.getMonth() + 1))
            format = format.replace("dd", dateTime.getDate() >= 10 ? dateTime.getDate() : "0" + dateTime.getDate());
            format = format.replace("hh", dateTime.getHours() >= 10 ? dateTime.getHours() : "0" + dateTime.getHours());
            format = format.replace("mm", dateTime.getMinutes() >= 10 ? dateTime.getMinutes() : "0" + dateTime.getMinutes());
            format = format.replace("ss", dateTime.getSeconds() >= 10 ? dateTime.getSeconds() : "0" + dateTime.getSeconds());
            format = format.replace("ms", dateTime.getMilliseconds())
            return format;
        };
        //计算时间
        return sendtime.ToString('yyyy-MM-dd hh:mm:ss');
    } catch (error) {}
}