/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
const allHours = 1300;
const rsHours = 800;

module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
) {
    let weeksEdu;
    let priority = config[focus];

    if (knowsProgramming) {
        weeksEdu = Math.ceil(rsHours / priority);
    } else {
        weeksEdu = Math.ceil(allHours / priority);
    }
    return weeksEdu;
};