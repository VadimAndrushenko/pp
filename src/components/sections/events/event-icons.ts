import type { ComponentType } from "react"
import {
  Calendar,
  Camera,
  Clock,
  Martini,
  MapPin,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  Wine,
  Music,
  MicVocal,
  Brain,
  Briefcase,
  Sparkles,
  Star,
  Coffee,
  Trophy,
  Lightbulb,
  Beer,
  Heart,
  Gift,
  Dices,
  Handshake,
  CupSoda,
  Disc3,
  Smile,
  Soup,
} from "lucide-react"

type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>

export const EVENT_ICONS: Record<string, IconComponent> = {
  Wine, Martini, UtensilsCrossed, Users, Camera, Music, MicVocal, Brain,
  Briefcase, Sparkles, Star, Coffee, Trophy, Lightbulb, Beer, Heart,
  Calendar, Clock, MapPin, ShieldCheck,
  Gift, Dices, Handshake, CupSoda, Disc3, Smile, Soup,
}