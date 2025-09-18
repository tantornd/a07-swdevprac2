'use client';

import { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Paper,
} from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  const [venue, setVenue] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, contactNumber, venue });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1a1a] dark:to-[#0a0a0a]">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Venue Booking
        </h1>
        <div className="w-full flex justify-center">
          <Paper elevation={3} className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8 w-full max-w-2xl">
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Name-Lastname TextField */}
                <TextField
                  name="Name-Lastname"
                  label="Name-Lastname"
                  variant="standard"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                {/* Contact-Number TextField */}
                <TextField
                  name="Contact-Number"
                  label="Contact-Number"
                  variant="standard"
                  fullWidth
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />

                {/* Venue Select */}
                <FormControl variant="standard" fullWidth>
                  <InputLabel id="venue-label">Venue</InputLabel>
                  <Select
                    labelId="venue-label"
                    id="venue"
                    value={venue}
                    label="Venue"
                    onChange={(e) => setVenue(e.target.value)}
                    required
                  >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                  </Select>
                </FormControl>

                {/* Date Picker */}
                <DateReserve />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="contained"
                  name="Book Venue"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: '#667eea',
                    '&:hover': {
                      backgroundColor: '#5a67d8',
                    },
                  }}
                >
                  Book Venue
                </Button>
              </Box>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
}