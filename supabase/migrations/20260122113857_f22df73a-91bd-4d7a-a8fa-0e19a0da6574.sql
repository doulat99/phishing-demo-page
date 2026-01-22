-- Table to store captured credentials from phishing simulation
-- For educational purposes to demonstrate how attackers steal data
CREATE TABLE public.phishing_captures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  additional_info JSONB DEFAULT '{}',
  ip_address TEXT,
  user_agent TEXT,
  captured_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts for the simulation
ALTER TABLE public.phishing_captures ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (simulating how phishing pages capture data)
CREATE POLICY "Anyone can submit credentials (simulation)" 
ON public.phishing_captures 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated users (workshop admins) to view captured data
CREATE POLICY "Authenticated users can view captures" 
ON public.phishing_captures 
FOR SELECT 
TO authenticated
USING (true);

-- Add comment for clarity
COMMENT ON TABLE public.phishing_captures IS 'Educational phishing simulation - stores captured credentials for workshop demonstration';