export const CHANGE_ACTIVE_MAIN_CATEGORY = 'CHANGE_ACTIVE_MAIN_CATEGORY'
export const CHANGE_ACTIVE_SUB_CATEGORY = 'CHANGE_ACTIVE_SUB_CATEGORY'
export const GET_NAVBAR_DATA = 'GET_NAVBAR_DATA'
const navbarData = {
    'Web Apps': {
        'React/Redux AWS Serverless': '',
        'React My Books App':'',
        'AWS Metrics (MEAN + Python)': '',
        'Customer Onboarding Wizard':''
    },
    'Technical Skills': '',
    'Professional Experience': {
        'Teradata': {
            '1': {
                'Title':'',
                'Summary': '',
                'Date': '',
                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
        'Alliacense': {
            '1': {
                'Title':'',
                'Summary': '',
                'Date': '',

                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },

        },

        'Startups': {
            '1': {
                'Title':'',
                'Summary': '',
                'Date': '',
                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
        'UCLA SEAS': {
            '1': {
                'Title':'',
                'Summary': '',
                'Date': '',

                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
    },
    'Time Line': {
        'Work': '',
        'Personal': ''
    },

    'Accomplishments': {
        '1st Prize Teradata AI Hackathon': '',
        '2nd Prize Teradata Service Analytics Hackathon': '',
        '5th Position Teradata UI/UX Hackathon': '',
        'Patent Co-author (Invention Disclosure Report)':'',
        'AWS Certified Solution Architect': '',
        'Certified Scrum Master':''
    },
    'Machine Learning/Finance': {
        '1': '',
        '2': '',
        '3': ''
    },
    'Resume': '',


}
export function changeActiveMainCategory(mainCategory){

    return{
        type: CHANGE_ACTIVE_MAIN_CATEGORY,
        payload: mainCategory

    }
}

export function changeActiveSubCategory(subCategory){

    return{
        type: CHANGE_ACTIVE_SUB_CATEGORY,
        payload: subCategory

    }
}

export function getNavbarData(){

    return{
        type: GET_NAVBAR_DATA,
        payload: navbarData

    }
}
