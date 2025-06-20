export const formatDateReadable = (dateStr) => {
    if (!dateStr) return '';
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const [year, month, day] = dateStr.split('-');
    return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}г.`;
};