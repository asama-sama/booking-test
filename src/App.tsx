import React, { useState, useEffect } from 'react'
import Dropzone from 'react-dropzone'
import './App.css'
import { Booking, TimelineDurationProperty } from './Types';
import Timeline from './components/Timeline/Timeline';
import {PostBookingsRes} from '../server/types/resTypes/PostBookingsRes';
import { BOOKING_TYPES } from './utils/constants';
import Legend from './components/Legend/Legend';
import ErrorMessage from './components/Error/ErrorMessage';

const apiUrl = 'http://localhost:3001'

export const App = () => {
  const [previousBooking, setPreviousBookings] = useState<Booking[]>([])
  const [newBookings, setNewBookings] = useState<Booking[]>([])
  const [overLappingBookings, setOverLappingBookings] = useState<Booking[]>([])
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch(`${apiUrl}/bookings`)
      .then((response) => response.json())
      .then(setPreviousBookings)
  }, [])

  const onDrop = (files: File[]) => {
    console.log(files)
    onPost(files);
  }

  const onPost = async (files: File[]) => {
    setError('')
    const data = new FormData();
    files.forEach((file, idx) => {
      data.append(`file-${idx}`, file);
    });
    await fetch(`${apiUrl}/bookings`, {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then((json: PostBookingsRes) => {
      const {
        previousBookings, 
        insertedBookings, 
        overlappingBookings,
      }: PostBookingsRes = json
      setPreviousBookings(previousBookings);
      setNewBookings(insertedBookings);
      setOverLappingBookings(overlappingBookings);
      if (overlappingBookings.length > 0) {
        setError(`Could not set ${json.overlappingBookings.length} bookings`);
      }
    })
  }

  const prevWithProps: TimelineDurationProperty[] = previousBooking.map(i => ({
    ...i, 
    type: BOOKING_TYPES.PREVIOUS_BOOKING,
    row: 1
  }));
  const newWithProps: TimelineDurationProperty[] = newBookings.map(i => ({
    ...i,
    type: BOOKING_TYPES.NEW_BOOKING,
    row: 1
  }));
  const overlapWithProps: TimelineDurationProperty[] = overLappingBookings.map(i => ({
    ...i,
    type: BOOKING_TYPES.OVERLAPPING_BOOKING,
    row: 2
  }));
  const allBookings = prevWithProps.concat(newWithProps).concat(overlapWithProps);

  return (
    <div className='App'>
      <div className='App-header'>
        <Dropzone accept='.csv' onDrop={onDrop}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop some files here, or click to select files</p>
            </div>
          </section>
        )}
        </Dropzone>
      </div>
      <div className='App-main'>
        {error && <ErrorMessage error={error} />}
        <Legend />
        <p>Existing bookings:</p>
        <Timeline bookings={allBookings} rows={2}/>
      </div>
    </div>
  )
}
