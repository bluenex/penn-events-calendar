// import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Events as evUtil, Key } from '../../utils';
import EventList from './EventList';

const StyledSectionText = styled.div`
  font-family: 'Source Code Pro';
  font-size: 1.75rem;
  font-weight: bold;
  color: #222;
  padding-left: 1rem;
  /* text-align: center; */
`;

const EventsContainer = ({ allEvents }) => {
  const groupedByDates = evUtil.groupByDate(allEvents);

  return groupedByDates.map(grp => (
    <React.Fragment key={Key.getShortKey()}>
      <StyledSectionText>
        {/* <Fa icon="calendar-alt" /> */}
        &nbsp;
        <h2>{grp.dateFormatted}</h2>
      </StyledSectionText>
      <EventList
        groupedEvents={grp.events}
      />
    </React.Fragment>
  ));
};

EventsContainer.propTypes = {
  allEvents: PropTypes.arrayOf(Object).isRequired,
};

export default EventsContainer;