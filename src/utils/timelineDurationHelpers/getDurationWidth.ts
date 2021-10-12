// converts a number (in minutes) to the percentage it represents in 24 hrs
const durationWidth = (duration: number) => (duration / (24 * 60)) * 100; // percentage width of day

export default durationWidth;