import {
    Store,
    Building2,
    Activity,
    Dumbbell,
    Scissors,
    ShoppingBag,
    Zap,
    TrendingUp,
    Clock,
    CheckCircle2,
    Calendar,
    Users,
    ClipboardCheck
} from 'lucide-react';

export type Message = {
    id: string;
    sender: 'user' | 'business' | 'ai';
    text: string;
    time: string;
    variant?: 'default' | 'error' | 'success';
};

export type Industry = {
    id: string;
    label: string;
    icon: any;
    question: string;
    metrics: {
        label: string;
        value: string;
        icon: any;
        color: string;
    }[];
    chatScenarios: {
        lost: Message[];
        won: Message[];
    };
    calculatorDefaults: {
        avgValue: number;
        responseTime: string; // 'under_5', '5_30', '1_3', 'after_hours', 'next_day'
    };
};

export const INDUSTRIES: Industry[] = [
    {
        id: 'Restaurant',
        label: 'Restaurant',
        icon: Store,
        question: "Do you run a restaurant?",
        metrics: [
            { label: 'Reservations', value: '+18/week', icon: Calendar, color: 'text-primary' },
            { label: 'Response', value: 'INSTANT', icon: Zap, color: 'text-yellow-400' },
            { label: 'Auto-Replies', value: '100%', icon: CheckCircle2, color: 'text-green-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'Do you have a table for 4 tonight at 8?', time: '19:45' },
                { id: 'l2', sender: 'user', text: 'Hello?', time: '20:10' },
                { id: 'l3', sender: 'business', text: 'Sorry, we missed this! We are full now.', time: '20:45', variant: 'error' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'Do you have a table for 4 tonight at 8?', time: '19:45' },
                { id: 'w2', sender: 'ai', text: 'We have one table left for 4 at 8:00 PM. Should I book it for you?', time: '19:45', variant: 'success' },
                { id: 'w3', sender: 'user', text: 'Yes please!', time: '19:46' },
                { id: 'w4', sender: 'ai', text: 'Confirmed! Table for 4 at 8:00 PM. See you soon!', time: '19:46', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 60, responseTime: '1_3' } // Dinner for 4 approx
    },
    {
        id: 'Real Estate',
        label: 'Real Estate',
        icon: Building2,
        question: "Are you in Real Estate?",
        metrics: [
            { label: 'Hot Leads', value: '+8/week', icon: TrendingUp, color: 'text-primary' },
            { label: 'Response', value: 'INSTANT', icon: Zap, color: 'text-yellow-400' },
            { label: 'Qualified', value: '24/7', icon: ClipboardCheck, color: 'text-green-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'Is the apartment in downtown still available?', time: '10:15' },
                { id: 'l2', sender: 'business', text: 'Hi, let me check for you.', time: '14:30', variant: 'error' },
                { id: 'l3', sender: 'user', text: 'I already scheduled a viewing with another agent.', time: '14:35' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'Is the apartment in downtown still available?', time: '10:15' },
                { id: 'w2', sender: 'ai', text: 'Yes, it is! 2 bed, 1 bath. Asking €1200/mo. Want to see photos or book a viewing?', time: '10:15', variant: 'success' },
                { id: 'w3', sender: 'user', text: 'Book a viewing please.', time: '10:16' },
                { id: 'w4', sender: 'ai', text: 'I can do tomorrow at 10 AM or 2 PM. Which works best?', time: '10:16', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 1500, responseTime: '1_3' } // Commission/Rent value proxy
    },
    {
        id: 'Clinic',
        label: 'Clinic',
        icon: Activity,
        question: "Do you manage a clinic?",
        metrics: [
            { label: 'Bookings', value: '+12/week', icon: Calendar, color: 'text-primary' },
            { label: 'No-Shows', value: '-40%', icon: TrendingUp, color: 'text-green-400' },
            { label: 'Support', value: '24/7', icon: CheckCircle2, color: 'text-blue-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'Do you have openings for a dental cleaning tomorrow?', time: '21:30' },
                { id: 'l2', sender: 'business', text: 'Please call us during business hours.', time: '09:00', variant: 'error' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'Do you have openings for a dental cleaning tomorrow?', time: '21:30' },
                { id: 'w2', sender: 'ai', text: 'Yes, Dr. Aliu has an opening at 11:00 AM tomorrow. Does that work?', time: '21:30', variant: 'success' },
                { id: 'w3', sender: 'user', text: 'Perfect.', time: '21:31' },
                { id: 'w4', sender: 'ai', text: 'Booked! You will receive a reminder sms.', time: '21:31', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 80, responseTime: 'after_hours' }
    },
    {
        id: 'Gym',
        label: 'Gym',
        icon: Dumbbell,
        question: "Do you own a gym?",
        metrics: [
            { label: 'Memberships', value: '+15/mo', icon: Users, color: 'text-primary' },
            { label: 'Lead Info', value: 'Captured', icon: ClipboardCheck, color: 'text-green-400' },
            { label: 'Response', value: 'INSTANT', icon: Zap, color: 'text-yellow-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'How much is the monthly membership?', time: '18:20' },
                { id: 'l2', sender: 'business', text: 'It depends. Come visit us.', time: '19:45', variant: 'error' },
                { id: 'l3', sender: 'user', text: 'I just wanted a price...', time: '19:50' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'How much is the monthly membership?', time: '18:20' },
                { id: 'w2', sender: 'ai', text: 'Our plans start at 35€/mo. We have a free day pass if you want to try it out!', time: '18:20', variant: 'success' },
                { id: 'w3', sender: 'user', text: 'Ill take the pass.', time: '18:21' },
                { id: 'w4', sender: 'ai', text: 'Great! Whats your name and email to send the pass to?', time: '18:21', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 40, responseTime: '5_30' }
    },
    {
        id: 'Salon',
        label: 'Salon',
        icon: Scissors,
        question: "Do you own a salon?",
        metrics: [
            { label: 'Appointments', value: '+20/week', icon: Calendar, color: 'text-primary' },
            { label: 'Phone Calls', value: '-80%', icon: TrendingUp, color: 'text-green-400' },
            { label: 'Response', value: 'INSTANT', icon: Zap, color: 'text-yellow-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'Can I get a haircut today at 5?', time: '14:00' },
                { id: 'l2', sender: 'business', text: 'Sorry busy. Maybe tomorrow?', time: '16:30', variant: 'error' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'Can I get a haircut today at 5?', time: '14:00' },
                { id: 'w2', sender: 'ai', text: 'We are fully booked at 5, but 4:15 PM or 6:00 PM are open. Do either work?', time: '14:00', variant: 'success' },
                { id: 'w3', sender: 'user', text: '6:00 PM is fine.', time: '14:01' },
                { id: 'w4', sender: 'ai', text: 'Locked in! See you at 6.', time: '14:01', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 50, responseTime: '1_3' }
    },
    {
        id: 'Ecommerce',
        label: 'Ecommerce',
        icon: ShoppingBag,
        question: "Do you run an e-com store?",
        metrics: [
            { label: 'Support', value: 'Automated', icon: Zap, color: 'text-primary' },
            { label: 'Recovery', value: '+15%', icon: TrendingUp, color: 'text-green-400' },
            { label: 'Response', value: 'INSTANT', icon: Zap, color: 'text-yellow-400' },
        ],
        chatScenarios: {
            lost: [
                { id: 'l1', sender: 'user', text: 'Do you ship to Kosovo?', time: '22:15' },
                { id: 'l2', sender: 'business', text: 'Yes.', time: '09:30', variant: 'error' },
                { id: 'l3', sender: 'user', text: 'Too late, ordered from elsewhere.', time: '09:35' },
            ],
            won: [
                { id: 'w1', sender: 'user', text: 'Do you ship to Kosovo?', time: '22:15' },
                { id: 'w2', sender: 'ai', text: 'Yes! We ship to all cities in Kosovo via Posta or private courier (24h).', time: '22:15', variant: 'success' },
                { id: 'w3', sender: 'user', text: 'How much is shipping?', time: '22:16' },
                { id: 'w4', sender: 'ai', text: 'It\'s free for orders over €50, otherwise €3. Need help with an order?', time: '22:16', variant: 'success' },
            ]
        },
        calculatorDefaults: { avgValue: 80, responseTime: 'after_hours' }
    },
];

// Helper to get industry by ID
export const getIndustry = (id: string | null) => {
    if (!id) return INDUSTRIES[0];
    return INDUSTRIES.find(i => i.id === id) || INDUSTRIES[0];
};

// Fix for icon case sensitivity in 'Clinic' if needed.
// actually we can just use CheckCircle2 in the array directly, no need for alias variable if it was causing issues.
// But to match the previous code structure where I used 'checkcircle2' in color map?
// No, I used it as `icon: checkcircle2`.
// Let's just remove the alias and use CheckCircle2 in the object above.
