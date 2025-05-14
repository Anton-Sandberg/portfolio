import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  BeakerIcon,
  DocumentTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { PATHS } from "../router/PATHS";

export const NAV_LINKS = [
  {
    path: PATHS.home,
    label: "Hem",
    icon: HomeIcon,
  },
  {
    path: PATHS.about,
    label: "Om mig",
    icon: UserIcon,
  },
  {
    path: PATHS.skills,
    label: "Kunskaper",
    icon: BeakerIcon,
  },
  {
    path: PATHS.projects,
    label: "Projekt",
    icon: BriefcaseIcon,
  },
  {
    path: PATHS.resume,
    label: "CV",
    icon: DocumentTextIcon,
  },
  {
    path: PATHS.contact,
    label: "Kontakt",
    icon: EnvelopeIcon,
  },
];
