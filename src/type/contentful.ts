export interface Banner {
  metadata: Metadata;
  sys: Sys;
  fields: BannerFields;
}

interface Metadata {
  tags: any[];
  concepts: any[];
}

interface Sys {
  space: {
    sys: LinkSys;
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: LinkSys;
  };
  publishedVersion: number;
  revision: number;
  contentType: {
    sys: LinkSys;
  };
  locale: string;
}

interface LinkSys {
  type: string;       // "Link"
  linkType: string;   // "Space" | "Environment" | "ContentType" | "Asset" | "Entry"
  id: string;
}

interface BannerFields {
  identifier: string;
  title: string;
  image: {
    sys: LinkSys;
  };
  imagePosition: boolean;
  description: any;
  button: {
    sys: LinkSys;
  };
}

interface RichTextDocument {
  data: Record<string, any>;
  content: any[]; // RichTextNode
  nodeType: string; // "document"
}

// interface RichTextNode {
//   data: Record<string, any>;
//   content: Array<{
//     data: Record<string, any>;
//     marks: any[];
//     value: string;
//     nodeType: string; // "text"
//   }>;
//   nodeType: string; // "paragraph"
// }
