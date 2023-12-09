


namespace Keepr.Repositories;

public class VaultsRepository
{
  private readonly IDbConnection _db;

  public VaultsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal Vault CreateVault(Vault vaultData)
  {
    string sql = @"
      INSERT INTO 
      vaults(name, description, img, isPrivate, creatorId)
      VALUES(@Name, @Description, @Img, @IsPrivate, @CreatorId);
      
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = LAST_INSERT_ID();";
    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, vaultData).FirstOrDefault();
    return vault;
  }

  internal Vault GetVaultById(int vaultId, string userId)
  {
    string sql = @"
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = @vaultId;";
    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, new { vaultId }).FirstOrDefault();
    return vault;
  }

  internal Vault UpdateVault(Vault vaultToUpdate)
  {
    string sql = @"
      UPDATE vaults
      SET
      name = @Name,
      description = @Description,
      img = @Img,
      isPrivate = @IsPrivate
      WHERE id = @Id LIMIT 1;
      
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = @Id;";

    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, vaultToUpdate).FirstOrDefault();
    return vault;
  }

  private Vault VaultBuilder(Vault vault, Profile profile)
  {
    vault.Creator = profile;
    return vault;
  }
}