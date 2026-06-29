/**
 * OmniPlatform - Supabase Client Configuration
 * 
 * This file initializes the Supabase client and provides helper functions
 * for authentication, database operations, and storage.
 * 
 * Supabase Project: krdfdhjzwggsuaqjso
 * URL: https://krdfdhjzwggsuaqjso.supabase.co
 */

// Supabase configuration
const SUPABASE_CONFIG = {
  url: 'https://krdfdhjzwggsuaqjso.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyd2RmZGhqendnZ3N1YXFhanNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3MTI3MzksImV4cCI6MjA5ODI4ODczOX0.1yavu3aMaPLDTth18GVBQzEXWo0_r3sm13b_ioDb8Gw'
};

// Initialize Supabase client (requires supabase-js CDN)
let supabaseClient = null;

function initSupabase() {
  if (typeof supabase !== 'undefined' && !supabaseClient) {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
  }
  return supabaseClient;
}

function getSupabase() {
  if (!supabaseClient) {
    initSupabase();
  }
  return supabaseClient;
}

// ==================
// AUTH HELPERS
// ==================

const Auth = {
  // Sign up with email/password
  async signUp(email, password, metadata = {}) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: { data: metadata }
    });
    if (error) throw error;
    return data;
  },

  // Sign in with email/password
  async signIn(email, password) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return data;
  },

  // Sign in with OAuth (Google, GitHub, etc.)
  async signInWithOAuth(provider) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + '/pages/core/dashboard/'
      }
    });
    if (error) throw error;
    return data;
  },

  // Sign out
  async signOut() {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { error } = await client.auth.signOut();
    if (error) throw error;
  },

  // Get current user
  async getUser() {
    const client = getSupabase();
    if (!client) return null;
    
    const { data: { user } } = await client.auth.getUser();
    return user;
  },

  // Get current session
  async getSession() {
    const client = getSupabase();
    if (!client) return null;
    
    const { data: { session } } = await client.auth.getSession();
    return session;
  },

  // Listen to auth changes
  onAuthStateChange(callback) {
    const client = getSupabase();
    if (!client) return null;
    
    return client.auth.onAuthStateChange(callback);
  },

  // Reset password
  async resetPassword(email) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/pages/core/account-settings/'
    });
    if (error) throw error;
  },

  // Update user profile
  async updateProfile(updates) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.auth.updateUser(updates);
    if (error) throw error;
    return data;
  }
};

// ==================
// DATABASE HELPERS
// ==================

const DB = {
  // Generic select
  async select(table, options = {}) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    let query = client.from(table).select(options.columns || '*');
    
    if (options.filter) {
      for (const [key, value] of Object.entries(options.filter)) {
        query = query.eq(key, value);
      }
    }
    if (options.order) {
      query = query.order(options.order.column, { ascending: options.order.ascending ?? false });
    }
    if (options.limit) {
      query = query.limit(options.limit);
    }
    
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  // Insert
  async insert(table, data) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data: result, error } = await client.from(table).insert(data).select();
    if (error) throw error;
    return result;
  },

  // Update
  async update(table, data, filter) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    let query = client.from(table).update(data);
    for (const [key, value] of Object.entries(filter)) {
      query = query.eq(key, value);
    }
    
    const { data: result, error } = await query.select();
    if (error) throw error;
    return result;
  },

  // Delete
  async delete(table, filter) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    let query = client.from(table).delete();
    for (const [key, value] of Object.entries(filter)) {
      query = query.eq(key, value);
    }
    
    const { error } = await query;
    if (error) throw error;
  },

  // RPC (Remote Procedure Call)
  async rpc(functionName, params = {}) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.rpc(functionName, params);
    if (error) throw error;
    return data;
  }
};

// ==================
// STORAGE HELPERS
// ==================

const Storage = {
  // Upload file
  async upload(bucket, path, file, options = {}) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: options.cacheControl || '3600',
        upsert: options.upsert || false
      });
    if (error) throw error;
    return data;
  },

  // Download file
  async download(bucket, path) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.storage.from(bucket).download(path);
    if (error) throw error;
    return data;
  },

  // Get public URL
  getPublicUrl(bucket, path) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data } = client.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },

  // List files
  async list(bucket, folder = '') {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { data, error } = await client.storage.from(bucket).list(folder);
    if (error) throw error;
    return data;
  },

  // Delete file
  async remove(bucket, paths) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase not initialized');
    
    const { error } = await client.storage.from(bucket).remove(paths);
    if (error) throw error;
  }
};

// ==================
// REALTIME HELPERS
// ==================

const Realtime = {
  // Subscribe to table changes
  subscribe(table, callback) {
    const client = getSupabase();
    if (!client) return null;
    
    return client
      .channel(`${table}-changes`)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table }, 
        callback
      )
      .subscribe();
  },

  // Unsubscribe
  async unsubscribe(subscription) {
    if (subscription) {
      await subscription.unsubscribe();
    }
  }
};

// Export for use in pages
window.OmniSupabase = {
  config: SUPABASE_CONFIG,
  init: initSupabase,
  get: getSupabase,
  Auth,
  DB,
  Storage,
  Realtime
};
