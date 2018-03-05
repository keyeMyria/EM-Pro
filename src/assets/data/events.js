import {clients} from './clients'
import {venues} from './venues'
import moment from 'moment'

export default {
  q : {
      title: 'Bernie Sanders Rally',
      allDay: true,
      start: new Date(2016, 4, 9),
      end: moment("may 10 2016 11:30 PM"),
      desc: 'Political Rally',
      schedule : {
        'doors Open': '10am',
        'doors close': '2pm',
        'run time': '12pm-2pm',
        'load in time': '5/10/2016, 3pm',
        'load in desc': 'all over the place',
        'Sound check/tech time': '???',
      },
      venue : {
        venue: '',
        stage: '',
      },
      client : '',
      'production info' : {
        'Band/production/performers contact': 'Bernie Sanders',
        'Traveling with Crew or Engineers?': 'no',
        'Event attendance expected': '800-10,000',
        'Description of sound coverage needed': '',
        'Description of musical acts, performers': 'not sure yet',
      },
      'audio notes' : {
        'Set up notes, drawings': '',
        'Rigging description, drawing': 'geni towers for line array',
        'Main PA description desired': '6 x MSL-4 for zone 1, 12 x 4888 for zone 2',
        'Main PA fill description desired': '4 x k10',
        'Main PA & fill placement': 'MSL-4s stacked on subs, Vertec on geni towers',
        'PA rigging/hardware requirements': 'rigging trunk, vertec array frames',
        'FOH console/location/other gear': 'Pro 1 next to media riser',
        'Monitor console': 'none',
        'Stage monitors type & quantity': '1 x K10',
        'Mixes required': '',
        'Number of inputs/stageplot/input list': '',
        'Description of mic/input package': 'presidential sm-57 steup, 4 x wireless sm-58, 4 x di, 2 x sm-58, 2 x sm-81',
        'Snake run description': '120\' from FOH to stage 300\' from stage to zone 2',
        'Audio Subcontractors needed': 'none',
        'Audio Subrentals needed': 'Press Pool Boxes from P.S.A., Geni towers from Mike and Jay, Feeder from Rich, Cable ramps from Mike and RMR',
        'Other audio feeds required': '???',
        'Power distro/service': 'Lighting power will be from the edison outlets on stage and from the edison outlets in the pavillion for the dimmers',
      },
      'lighting notes' : {
        'Description of lighting coverage area(s)': 'BERNIE!!!',
        'Main lighting rig description': 'up lighting on stage with LEDs and front light from the media riser with JR zooms',
        'Main lighting rig placement': 'stage fixtures will be floor mounted and shine up at the gazebo for reflected light. JR zooms on booms with diffusion gel on the media riser',
        'Auxiliary lighting rig(s) description': 'none',
        'Auxiliary lighting rig placement': 'none',
        'Lighting rigging/placement hardware requirements': '2 x 7\' booms with heavy bases and sand bags',
        'Description of performers to light/stageplot(s)': 'BERNIE!!!',
        'Lighting power distro/service': 'Lighting power will be from the edison outlets on stage and from the edison outlets in the pavillion for the dimmers',
        'Lighting control description/location': 'smartfade at FOH',
        'Universes layout': '',
        'Lighting Subcontractors needed': 'none',
        'Lighting Subrentals needed': 'none',
      },
      'video notes' : {
        'Main video surface(s) description': '9\'x14\' 7mm LED wall',
        'Other video zones/fill/confidence description': 'none',
        'Projector(s) placement/format description': 'none',
        'Video input sources/locations/formats': 'camera on video riser, logo ',
        'Video control location/description': 'behind gazebo',
        'Format conversion(s) description/location': '???',
        'Video Content Details': '',
        'Video power distro/service': '',
        'Video Subcontractors needed': '',
        'Video Subrentals needed': '',
      },
      'backline notes' : {
        'Backline description/needs': '',
        'Backline Subcontractors needed': '',
        'Backline Subrentals needed': '',
      },
      'crew notes' : {
        'MPA Sales Rep': 'Alex',
        'MPA Show Lead': 'Alex',
        'On Site Lead': 'Alex',
        'MPA vehicle(s) to be used': 'Truck',
        'Mileage Estimate': 'some bit with sub rentals',
        'Audio Engineer': 'Scully',
        'A2': 'Ryan',
        'Lighting Designer/Engineer': 'Alex',
        'Video Producer/Engineer': '',
      },
      'other notes' : {
        'Soft goods/deco description': '',
        'Hospitality description': '',
        'Stagehands/Techs needs description': '',
        'Possible gear/labor conflicts': '',
        'Banner or advertising available': '',
        'Rain/Weather Backup Plan': '',
      },
    },
  w : {
      title: 'Long Event',
      start: new Date(2016, 4, 7),
      end: new Date(2016, 4, 10),
    },

  e : {
      title: 'DTS STARTS',
      start: new Date(2016, 4, 13, 0, 0, 0),
      end: new Date(2016, 4, 20, 0, 0, 0),
    },

  r : {
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },

  t : {
      title: 'Some Event',
      start: new Date(2016, 4, 9, 0, 0, 0),
      end: new Date(2016, 4, 9, 0, 0, 0),
    },
  y : {
      title: 'Conference',
      start: new Date(2016, 4, 11),
      end: new Date(2016, 4, 13),
      desc: 'Big conference for important people',
    },
  u : {
      title: 'Meeting',
      start: new Date(2016, 4, 12, 10, 30, 0, 0),
      end: new Date(2016, 4, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
  i : {
      title: 'Lunch',
      start: new Date(2016, 4, 12, 12, 0, 0, 0),
      end: new Date(2016, 4, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
  o : {
      title: 'Meeting',
      start: new Date(2016, 4, 12, 14, 0, 0, 0),
      end: new Date(2016, 4, 12, 15, 0, 0, 0),
    },
  p : {
      title: 'Happy Hour',
      start: new Date(2016, 4, 12, 17, 0, 0, 0),
      end: new Date(2016, 4, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
  a : {
      title: 'Dinner',
      start: new Date(2016, 4, 12, 20, 0, 0, 0),
      end: new Date(2016, 4, 12, 21, 0, 0, 0),
    },
  s : {
      title: 'Birthday Party',
      start: new Date(2016, 4, 13, 7, 0, 0),
      end: new Date(2016, 4, 13, 10, 30, 0),
    },
  d : {
      title: 'Late Night Event',
      start: new Date(2016, 4, 17, 19, 30, 0),
      end: new Date(2016, 4, 18, 2, 0, 0),
    },
  f : {
    title: 'Multi-day Event',
    start: new Date(2016, 4, 20, 19, 30, 0),
    end: new Date(2016, 4, 22, 2, 0, 0),
  }
}
