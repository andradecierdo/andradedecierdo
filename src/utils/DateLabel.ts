export const getSchoolYearLabel = (starDate: Date, endDate?: Date): string => {
  const endYear = endDate?.getFullYear() || 'Current'
  return `(${starDate.getFullYear()} - ${endYear})`
}

export const getDateLabel = (d: Date): string => {
  return d.toLocaleString('default', { month: 'short', year: 'numeric' })
}

export const getDurationLabel = (starDate: Date, endDate?: Date): string => {
  const endYear = endDate ? getDateLabel(endDate) : 'Current'
  return `(${getDateLabel(starDate)} - ${endYear})`
}
