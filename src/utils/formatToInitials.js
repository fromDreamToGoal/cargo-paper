export function formatToInitials(fullName) {
  if (!fullName) return '';

  const parts = fullName.trim().split(' ');

  if (parts.length < 2) return fullName; // если имя только одно

  const [surname, name, patronymic] = parts;

  const nameInitial = name ? name.charAt(0).toUpperCase() + '.' : '';
  const patronymicInitial = patronymic ? patronymic.charAt(0).toUpperCase() + '.' : '';

  return `${surname} ${nameInitial} ${patronymicInitial}`.trim();
}