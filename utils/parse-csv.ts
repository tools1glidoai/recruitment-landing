import { rawCandidates, processCandidateData } from "@/data/candidates"

// Function to fetch and parse the CSV data
export async function fetchCandidateData() {
  try {
    // Instead of fetching CSV, we'll use our local data
    return rawCandidates
  } catch (error) {
    console.error("Error fetching candidate data:", error)
    return []
  }
}

// Helper function to properly parse CSV lines with quoted fields
function parseCSVLine(line: string): string[] {
  const result = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === "," && !inQuotes) {
      result.push(current)
      current = ""
    } else {
      current += char
    }
  }

  result.push(current)
  return result
}

// Export the processCandidateData function from the candidates file
export { processCandidateData }

